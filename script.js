/* =================================================================
   Core Java Workshop — Slide Engine
   Renders window.DECK into #slide. Handles nav, search, copy, etc.
   ================================================================= */
(function(){
  'use strict';

  /* ---------- State ---------- */
  var DECK = window.DECK || [];
  var current = 0;
  var done = new Set();
  var searchIdx = -1;
  var searchMatches = [];

  /* ---------- DOM Elements ---------- */
  var slideEl, dotsEl, outlineEl, slidePosEl, deckBarEl, prevBtn, nextBtn;
  var searchInput, searchResults, sidebarEl, sbBackdrop, toastEl;

  /* ---------- DOM helper ---------- */
  function $(id){ return document.getElementById(id); }
  function el(tag, cls, html){
    var e = document.createElement(tag);
    if(cls) e.className = cls;
    if(html != null) e.innerHTML = html;
    return e;
  }

  /* ---------- Java syntax highlighter (lightweight) ---------- */
  var KEYWORDS = ('public static void class int double boolean char byte short long float '+
    'String Scanner System if else for while do switch case break continue return new this '+
    'final extends implements package import try catch default').split(' ');
  var BOOLS = ['true','false','null'];

  function escapeHTML(s){
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(String(s)));
    return d.innerHTML;
  }

  function highlightJava(code){
    code = escapeHTML(code);
    // protect comments and strings with placeholders
    code = code.replace(/(\/\*[\s\S]*?\*\/)/g, '\u0001$1\u0001');
    code = code.replace(/(\/\/[^\n]*)/g, '\u0001$1\u0001');
    code = code.replace(/("[^"]*?")/g, '\u0002$1\u0002');
    code = code.replace(/('[^']*?')/g, '\u0002$1\u0002');
    // numbers
    code = code.replace(/\b(\d+\.?\d*)\b/g, '<span class="tk-num">$1</span>');
    // booleans/null
    BOOLS.forEach(function(b){
      code = code.replace(new RegExp('\\b'+b+'\\b','g'), '<span class="tk-bool">'+b+'</span>');
    });
    // keywords
    KEYWORDS.forEach(function(k){
      code = code.replace(new RegExp('\\b'+k+'\\b','g'), '<span class="tk-key">'+k+'</span>');
    });
    // restore protected spans
    code = code.replace(/\u0001(.*?)\u0001/g, '<span class="tk-com">$1</span>');
    code = code.replace(/\u0002(.*?)\u0002/g, '<span class="tk-str">$1</span>');
    return code;
  }

  /* ---------- Block renderers ---------- */
  function para(text){ return el('p','b-p',text); }
  function sectionHead(text, cls, icon){
    return el('div','b-h '+(cls||''), (icon?'<span class="ic">'+icon+'</span>':'') + text);
  }

  function buildCodeBlock(file, code, output, lines){
    var cb = el('div','code-block');
    cb.appendChild(el('div','code-block__bar',
      '<div class="code-block__dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>'+
      '<span class="code-block__file">'+(file||'Main.java')+'</span>'+
      '<button class="code-block__copy" data-copy="'+encodeURIComponent(code)+'">Copy</button>'));
    var arr = code.split('\n');
    var body = el('div','code-block__body');
    var ln = el('div','code-block__ln');
    var codeEl = el('div','code-block__code');
    arr.forEach(function(line,i){
      ln.appendChild(el('span','', (i+1)));
      codeEl.appendChild(el('span','line', highlightJava(line||' ')));
    });
    body.appendChild(ln); body.appendChild(codeEl);
    cb.appendChild(body);
    if(output){
      cb.appendChild(el('div','code-output','<div class="code-output__h">Output</div>'+escapeHTML(output)));
    }
    if(lines && lines.length){
      var ex = el('div','code-explain');
      ex.appendChild(el('div','code-output__h','Code Explanation'));
      lines.forEach(function(l){
        ex.appendChild(el('div','code-explain__row',
          '<div class="code-explain__n">'+l.n+'</div><div class="code-explain__t">'+l.explain+'</div>'));
      });
      cb.appendChild(ex);
    }
    return cb;
  }

  var RENDERERS = {
    intro: function(b){ var d=el('div','block'); d.appendChild(sectionHead('Introduction','intro','📘')); d.appendChild(para(b.p)); return d; },
    why: function(b){ var d=el('div','block'); d.appendChild(sectionHead('Why is it needed?','why','🎯')); d.appendChild(para(b.p)); return d; },
    analogy: function(b){
      return el('div','block', '<div class="callout analogy"><div class="callout__ic">💡</div><div><div class="callout__t">Real-life Analogy</div><div class="callout__p">'+b.p+'</div></div></div>');
    },
    def: function(b){ var d=el('div','block'); d.appendChild(sectionHead('Technical Definition','def','📐')); d.appendChild(para(b.p)); return d; },
    explain: function(b){
      var d=el('div','block'); d.appendChild(sectionHead('Detailed Explanation','explain','📖'));
      if(Array.isArray(b.p)){ b.p.forEach(function(p){ d.appendChild(para(p)); }); }
      else { d.appendChild(para(b.p)); }
      return d;
    },
    bul: function(b){
      var d=el('div','block'); d.appendChild(sectionHead(b.title||'Key Points','','•'));
      var ul=el('ul','b-ul');
      b.items.forEach(function(it){ ul.appendChild(el('li','',it)); });
      d.appendChild(ul); return d;
    },
    syntax: function(b){
      var d=el('div','block'); d.appendChild(sectionHead('Syntax','','🔑'));
      d.appendChild(el('div','syntax-block', highlightJava(b.code)));
      if(b.desc) d.appendChild(el('div','syntax-block__desc', b.desc));
      return d;
    },
    code: function(b){
      var d=el('div','block'); d.appendChild(sectionHead('Sample Java Program','','💻'));
      d.appendChild(buildCodeBlock(b.file, b.code, b.output, b.lines));
      return d;
    },
    mistakes: function(b){
      var d=el('div','block'); d.appendChild(sectionHead('Common Beginner Mistakes','mistakes','⚠️'));
      var ul=el('ul','b-ul');
      b.items.forEach(function(it){ ul.appendChild(el('li','',it)); });
      d.appendChild(ul); return d;
    },
    best: function(b){
      var d=el('div','block'); d.appendChild(sectionHead('Best Practices','best','✅'));
      var ul=el('ul','b-ul');
      b.items.forEach(function(it){ ul.appendChild(el('li','',it)); });
      d.appendChild(ul); return d;
    },
    summary: function(b){
      var d=el('div','block'); d.appendChild(sectionHead('Summary','summary','📝'));
      var ul=el('ul','b-ul');
      b.items.forEach(function(it){ ul.appendChild(el('li','',it)); });
      d.appendChild(ul); return d;
    },
    practice: function(b){
      var d=el('div','block'); d.appendChild(sectionHead('Practice & Exercises','','🏋️'));
      var wrap=el('div','practice');

      // 1. Conceptual Questions
      if(b.conceptual && b.conceptual.length){
        var sec=el('div','practice__sec');
        sec.appendChild(el('div','practice__h','Conceptual Questions'));
        var list=el('ol','practice__ol');
        b.conceptual.forEach(function(it){
          var li=el('li','practice__item');
          li.appendChild(el('div','practice__q', it.q));
          var det=el('details','solution');
          det.appendChild(el('summary','<span class="caret">▶</span> Show Answer'));
          var body=el('div','solution__body');
          body.appendChild(para(it.a));
          det.appendChild(body);
          li.appendChild(det);
          list.appendChild(li);
        });
        sec.appendChild(list); wrap.appendChild(sec);
      }

      // 2. Coding Exercises
      if(b.coding && b.coding.length){
        var sec=el('div','practice__sec');
        sec.appendChild(el('div','practice__h','Coding Exercises'));
        var list=el('ol','practice__ol');
        b.coding.forEach(function(it){
          var li=el('li','practice__item');
          li.appendChild(el('div','practice__q', it.q));
          if(it.desc) li.appendChild(el('div','practice__desc', it.desc));
          
          var det=el('details','solution');
          det.appendChild(el('summary','<span class="caret">▶</span> Show Solution'));
          var body=el('div','solution__body');
          if(it.solCode) body.appendChild(buildCodeBlock(it.solFile||'Solution.java', it.solCode, it.solOut, null));
          if(it.solExp) body.appendChild(para(it.solExp));
          det.appendChild(body);
          li.appendChild(det);
          list.appendChild(li);
        });
        sec.appendChild(list); wrap.appendChild(sec);
      }

      // 3. Predict the Output
      if(b.predict && b.predict.length){
        var sec=el('div','practice__sec');
        sec.appendChild(el('div','practice__h','Predict the Output'));
        var list=el('ol','practice__ol');
        b.predict.forEach(function(it){
          var li=el('li','practice__item');
          if(it.code) li.appendChild(buildCodeBlock(it.file||'Predict.java', it.code, null, null));
          
          var det=el('details','solution');
          det.appendChild(el('summary','<span class="caret">▶</span> Show Answer'));
          var body=el('div','solution__body');
          body.appendChild(el('div','solution__ans','<strong>Expected Output:</strong><pre class="editor__code">'+escapeHTML(it.a)+'</pre>'));
          if(it.explain) body.appendChild(para(it.explain));
          det.appendChild(body);
          li.appendChild(det);
          list.appendChild(li);
        });
        sec.appendChild(list); wrap.appendChild(sec);
      }

      // 4. Debugging
      if(b.debug && b.debug.length){
        var sec=el('div','practice__sec');
        sec.appendChild(el('div','practice__h','Debugging Challenges'));
        var list=el('ol','practice__ol');
        b.debug.forEach(function(it){
          var li=el('li','practice__item');
          if(it.q) li.appendChild(el('div','practice__q', it.q));
          if(it.code) li.appendChild(buildCodeBlock(it.file||'BuggyCode.java', it.code, null, null));
          
          var det=el('details','solution');
          det.appendChild(el('summary','<span class="caret">▶</span> Show Fix'));
          var body=el('div','solution__body');
          if(it.bug) body.appendChild(el('div','solution__bug','<strong>The Bug:</strong> '+it.bug));
          if(it.solCode) body.appendChild(buildCodeBlock(it.solFile||'FixedCode.java', it.solCode, null, null));
          det.appendChild(body);
          li.appendChild(det);
          list.appendChild(li);
        });
        sec.appendChild(list); wrap.appendChild(sec);
      }

      d.appendChild(wrap); return d;
    },
    table: function(b){
      var d=el('div','block');
      if(b.title) d.appendChild(el('div','b-heading', b.title));
      var wrap=el('div','tbl-wrap');
      var t=el('table','b-table');
      var thead=el('thead'); var hr=el('tr');
      b.head.forEach(function(h){ hr.appendChild(el('th','',h)); });
      thead.appendChild(hr); t.appendChild(thead);
      var tbody=el('tbody');
      b.rows.forEach(function(r){
        var tr=el('tr');
        r.forEach(function(c){ tr.appendChild(el('td','',c)); });
        tbody.appendChild(tr);
      });
      t.appendChild(tbody); wrap.appendChild(t); d.appendChild(wrap);
      return d;
    },
    flow: function(b){
      var d=el('div','block');
      if(b.title) d.appendChild(el('div','b-heading', b.title));
      var flow=el('div','flow');
      b.steps.forEach(function(s,i){
        if(i>0) flow.appendChild(el('div','flow__arrow','↓'));
        var node=el('div','flow__node '+(s.type||'box'));
        node.appendChild(el('span','', s.label));
        flow.appendChild(node);
      });
      d.appendChild(flow); return d;
    },
    image: function(b){
      var d=el('div','block');
      var wrap=el('div','slide-image-container');
      var img=el('img','slide-image');
      img.src = b.src;
      img.alt = b.alt || 'Illustration';
      wrap.appendChild(img);
      if(b.caption){
        wrap.appendChild(el('div','slide-image-caption', b.caption));
      }
      d.appendChild(wrap);
      return d;
    },
    stack: function(b){
      var d=el('div','block');
      if(b.title) d.appendChild(el('div','b-heading', b.title));
      var st=el('div','stack');
      st.appendChild(el('div','stack__h', b.title||'Memory'));
      b.cells.forEach(function(c){
        st.appendChild(el('div','stack__cell', '<span>'+c.label+'</span><span class="v">'+c.val+'</span>'));
      });
      d.appendChild(st); return d;
    },
    compare: function(b){
      var d=el('div','block');
      var title = b.title || b.head;
      if(title) d.appendChild(el('div','b-heading', title));
      var grid=el('div','compare');
      [b.a,b.b].forEach(function(col){
        if(!col) return;
        var c=el('div','compare__col');
        var headText = col.head || col.title || '';
        c.appendChild(el('div','compare__h', headText));
        var body=el('div','compare__body');
        var rowsList = col.rows || col.items || [];
        rowsList.forEach(function(r){ body.appendChild(el('p','',r)); });
        c.appendChild(body); grid.appendChild(c);
      });
      d.appendChild(grid); return d;
    },
    heading: function(b){ var d=el('div','block'); d.appendChild(el('div','b-heading', b.text)); return d; },
    p: function(b){ var d=el('div','block'); d.appendChild(para(b.text)); return d; },
    raw: function(b){ return el('div','block', b.html); }
  };

  /* ---------- Slide rendering ---------- */
  function renderSlide(i){
    var item = DECK[i];
    if(!item) return;
    slideEl.innerHTML = '';
    slideEl.scrollTop = 0;

    if(item.type === 'module'){
      var card = el('div','module-card');
      card.appendChild(el('div','module-card__num', String(item.num).padStart(2,'0')));
      card.appendChild(el('div','module-card__title', item.title));
      if(item.desc) card.appendChild(el('div','module-card__desc', item.desc));
      if(item.topics && item.topics.length){
        var tWrap = el('div','module-card__topics');
        item.topics.forEach(function(t){ tWrap.appendChild(el('span','module-card__topic', t)); });
        card.appendChild(tWrap);
      }
      slideEl.appendChild(card);
      return;
    }

    var top = el('div','slide__top');
    top.appendChild(el('span','slide__chip', 'Module '+item.module));
    top.appendChild(el('h2','slide__title', item.topic));
    slideEl.appendChild(top);
    slideEl.appendChild(el('div','slide__rule'));

    (item.body||[]).forEach(function(b){
      var fn = RENDERERS[b.k];
      if(fn) slideEl.appendChild(fn(b));
      else slideEl.appendChild(el('div','block', '<div class="callout warn"><div class="callout__t">Unknown block</div><div class="callout__p">'+b.k+'</div></div>'));
    });
  }

  /* ---------- Navigation ---------- */
  function go(i){
    if(i < 0) i = 0;
    if(i > DECK.length-1) i = DECK.length-1;
    current = i;
    renderSlide(i);
    updateUI();
    saveState();
    if(DECK[i] && DECK[i].type==='slide'){ done.add(i); markOutlineDone(i); }
  }
  function next(){ go(current+1); }
  function prev(){ go(current-1); }

  function updateUI(){
    slidePosEl.textContent = (current+1) + ' / ' + DECK.length;
    deckBarEl.style.width = (DECK.length>1 ? (current/(DECK.length-1))*100 : 0) + '%';
    prevBtn.disabled = current===0;
    nextBtn.disabled = current===DECK.length-1;
    dotsEl.innerHTML = '';
    DECK.forEach(function(_,i){
      var dot=el('button','dot'+(i===current?' active':''));
      dot.title = 'Slide '+(i+1);
      dot.onclick = function(){ go(i); };
      dotsEl.appendChild(dot);
    });
    var rows = outlineEl.querySelectorAll('.outline-row');
    rows.forEach(function(r){
      r.classList.toggle('active', parseInt(r.dataset.i,10)===current);
    });
    var act = outlineEl.querySelector('.outline-row.active');
    if(act) act.scrollIntoView({block:'nearest',behavior:'smooth'});
  }

  /* ---------- Outline ---------- */
  function buildOutline(){
    outlineEl.innerHTML = '';
    var modGroups = {};
    var modOrder = [];
    DECK.forEach(function(item,i){
      var modNum = item.type==='module' ? item.num : item.module;
      if(!modGroups[modNum]){ modGroups[modNum]=[]; modOrder.push(modNum); }
      modGroups[modNum].push({item:i, obj:item});
    });
    modOrder.forEach(function(num){
      var group = modGroups[num];
      var modItem = group[0].obj;
      var modDiv = el('div','outline-mod');
      var modH = el('div','outline-mod__h',
        '<span class="outline-mod__num">'+num+'</span><span>'+(modItem.title||('Module '+num))+'</span><span class="caret">▼</span>');
      modDiv.appendChild(modH);
      var topics = el('div','outline-mod__topics');
      group.forEach(function(g){
        var row = el('div','outline-row');
        row.dataset.i = g.item;
        row.innerHTML = '<span>'+(g.obj.topic||'Module '+g.obj.num)+'</span><span class="done">✓</span>';
        row.onclick = function(){ go(g.item); if(window.innerWidth<=900) closeSidebar(); };
        topics.appendChild(row);
      });
      modH.onclick = function(){ modDiv.classList.toggle('collapsed'); };
      modDiv.appendChild(topics);
      outlineEl.appendChild(modDiv);
    });
  }

  function markOutlineDone(i){
    var row = outlineEl.querySelector('.outline-row[data-i="'+i+'"]');
    if(row) row.classList.add('done');
  }

  /* ---------- Search ---------- */
  function runSearch(q){
    searchResults.innerHTML = '';
    searchMatches = [];
    if(!q || q.length<2){ searchResults.hidden=true; return; }
    var ql = q.toLowerCase();
    DECK.forEach(function(item,i){
      var hay = ((item.topic||item.title||'') + ' ' + (item.module||'')).toLowerCase();
      if(hay.indexOf(ql) !== -1){
        searchMatches.push(i);
        var d=el('div','sr-item');
        d.innerHTML = '<div class="sr-mod">Slide '+(i+1)+(item.module?' · Module '+item.module:'')+'</div><div class="sr-t">'+(item.topic||item.title)+'</div>';
        d.onclick = function(){ go(i); searchResults.hidden=true; searchInput.value=''; };
        searchResults.appendChild(d);
      }
    });
    searchIdx = -1;
    searchResults.hidden = searchMatches.length===0;
  }
  function highlightSearch(){
    var items = searchResults.querySelectorAll('.sr-item');
    items.forEach(function(it,i){ it.classList.toggle('active', i===searchIdx); });
    if(searchIdx>=0 && items[searchIdx]) items[searchIdx].scrollIntoView({block:'nearest'});
  }

  /* ---------- Sidebar ---------- */
  function openSidebar(){
    document.body.classList.remove('sidebar-collapsed');
    sidebarEl.classList.add('open');
    sbBackdrop.classList.add('show');
  }
  function closeSidebar(){
    document.body.classList.add('sidebar-collapsed');
    sidebarEl.classList.remove('open');
    sbBackdrop.classList.remove('show');
  }
  function toggleSidebar(){
    if (document.body.classList.contains('sidebar-collapsed')) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg){
    toastEl.textContent = msg;
    toastEl.hidden = false;
    setTimeout(function(){ toastEl.classList.add('show'); }, 10);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toastEl.classList.remove('show'); setTimeout(function(){ toastEl.hidden=true; }, 300); }, 1800);
  }

  /* ---------- Persistence ---------- */
  function saveState(){
    try{
      localStorage.setItem('cjw_state', JSON.stringify({
        i: current,
        done: Array.from(done),
        theme: document.body.classList.contains('light-theme') ? 'light' : 'dark',
        projector: document.body.classList.contains('projector-mode')
      }));
    }catch(e){}
  }
  function loadState(){
    try{
      var s = JSON.parse(localStorage.getItem('cjw_state'));
      if(s){
        current = s.i||0;
        (s.done||[]).forEach(function(x){ done.add(x); });
        if(s.theme === 'light'){ document.body.classList.add('light-theme'); }
        else { document.body.classList.remove('light-theme'); }
        if(s.projector === true){ document.body.classList.add('projector-mode'); }
        else { document.body.classList.remove('projector-mode'); }
      }
    }catch(e){}
  }

  /* ---------- Copy buttons (event delegation) ---------- */
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.code-block__copy');
    if(!btn) return;
    var code = decodeURIComponent(btn.getAttribute('data-copy'));
    navigator.clipboard.writeText(code).then(function(){
      btn.classList.add('copied'); btn.textContent='Copied!';
      toast('Code copied to clipboard');
      setTimeout(function(){ btn.classList.remove('copied'); btn.textContent='Copy'; }, 1500);
    });
  });

  /* ---------- Theme & Projector ---------- */
  function toggleTheme(){
    closeSidebar();
    document.body.classList.toggle('light-theme');
    saveState();
    toast(document.body.classList.contains('light-theme') ? 'Light Theme enabled' : 'Dark Theme enabled');
  }
  function toggleProjectorMode(){
    closeSidebar();
    document.body.classList.toggle('projector-mode');
    saveState();
    toast(document.body.classList.contains('projector-mode') ? 'Projector Mode enabled' : 'Projector Mode disabled');
  }

  /* ---------- Fullscreen ---------- */
  function toggleFullscreen(){
    closeSidebar();
    if(!document.fullscreenElement){
      document.documentElement.requestFullscreen().catch(function(err){
        toast('Error enabling fullscreen: ' + err.message);
      });
    } else {
      if(document.exitFullscreen) document.exitFullscreen();
    }
  }

  /* ---------- Init ---------- */
  function init(){
    slideEl = $('slide'); dotsEl = $('dots'); outlineEl = $('outline');
    slidePosEl = $('slidePos'); deckBarEl = $('deckBar');
    prevBtn = $('prevBtn'); nextBtn = $('nextBtn');
    searchInput = $('searchInput'); searchResults = $('searchResults');
    sidebarEl = $('sidebar'); sbBackdrop = $('sbBackdrop'); toastEl = $('toast');

    if(!DECK.length){
      slideEl.innerHTML = '<div class="module-card"><div class="module-card__title">No content loaded</div><div class="module-card__desc">content.js is missing or empty.</div></div>';
      return;
    }

    loadState();
    buildOutline();
    done.forEach(function(i){ if(DECK[i] && DECK[i].type==='slide') markOutlineDone(i); });
    go(current);

    prevBtn.onclick = prev;
    nextBtn.onclick = next;
    $('menuBtn').onclick = toggleSidebar;
    sbBackdrop.onclick = closeSidebar;
    $('fsBtn').onclick = toggleFullscreen;
    $('themeBtn').onclick = toggleTheme;
    $('projectorBtn').onclick = toggleProjectorMode;

    searchInput.addEventListener('input', function(){ runSearch(this.value); });
    searchInput.addEventListener('keydown', function(e){
      if(!searchMatches.length) return;
      if(e.key==='ArrowDown'){ e.preventDefault(); searchIdx=Math.min(searchIdx+1,searchMatches.length-1); highlightSearch(); }
      else if(e.key==='ArrowUp'){ e.preventDefault(); searchIdx=Math.max(searchIdx-1,0); highlightSearch(); }
      else if(e.key==='Enter'){ if(searchIdx>=0){ go(searchMatches[searchIdx]); } searchResults.hidden=true; searchInput.value=''; }
      else if(e.key==='Escape'){ searchResults.hidden=true; searchInput.blur(); }
    });

    document.addEventListener('keydown', function(e){
      var tag = (e.target.tagName||'').toLowerCase();
      if(tag==='input' || tag==='textarea') return;
      switch(e.key){
        case 'ArrowRight': case 'PageDown': case ' ': e.preventDefault(); next(); break;
        case 'ArrowLeft': case 'PageUp': e.preventDefault(); prev(); break;
        case 'Home': e.preventDefault(); go(0); break;
        case 'End': e.preventDefault(); go(DECK.length-1); break;
        case 'm': case 'M': toggleSidebar(); break;
        case 'f': case 'F': toggleFullscreen(); break;
        case 't': case 'T': toggleTheme(); break;
        case 'p': case 'P': toggleProjectorMode(); break;
        case '/': e.preventDefault(); searchInput.focus(); break;
        case 'Escape': closeSidebar(); searchResults.hidden=true; break;
      }
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();