# WORK.md — Core Java Workshop (Slide App)

**Project status handoff.** Read this BEFORE doing anything. It records the decisions, what exists, what's wrong, and the exact steps to continue. This file exists so a different model/API can resume without hallucinating.

Last updated: 2026-07-15

---

## 1. What we are building

A **full-screen presentation / slides app** (like PowerPoint or Google Slides) for a **Core Java Workshop**, built with **HTML5 + CSS3 + Vanilla JS only**. Open `index.html` and it runs. No frameworks, no build tools, no backend.

**Critical**: This is a SLIDES app — **one topic per full-screen slide, NO scrolling webpage**. Each slide fills the viewport. Prev/Next + Arrow/Home/End keyboard navigation. Active slide highlighting. Progress bar. Sidebar outline with all modules/topics. Click any topic to jump.

### Latest prompt requirements (authoritative)
- Tech: `index.html`, `style.css`, `script.js` (+ `content.js` for data — see architecture).
- Design: **Modern Skeuomorphism**, dark theme, soft realistic shadows, raised cards, pressable buttons, rounded corners, elegant typography, smooth transitions, premium code blocks (VS Code style), minimal animations. AVOID glassmorphism / neon / flat / busy backgrounds.
- Behaviour: full-screen slides, one topic per slide, Prev/Next buttons, Arrow-key nav, Home=first, End=last, slide-number indicator, progress bar, sidebar with all modules+topics, click-to-navigate, active-slide highlight, smooth slide transitions, responsive.
- Content philosophy: absolute beginners from zero. Before teaching Java explain what programming is, why it exists, why computers need instructions, how they understand them, why programming languages / Java were created, where Java is used. Never assume prior knowledge.
- Every topic slide must contain these sections (where applicable): Introduction, Why is it needed, Real-life analogy, Technical Definition, Detailed Explanation, Syntax (explain every keyword), Sample Java Program (complete), Output (exact), Code Explanation (every line), Common Beginner Mistakes, Best Practices, Summary, Practice Questions (5 conceptual), Coding Exercises (3 beginner + 2 output-prediction + 1 debugging), Solution (full Java code + output + explanation).
- Code blocks: Java syntax highlighting, line numbers, copy button, output box, explanation box. VS Code style.
- Visual learning: flowcharts, diagrams, tables, comparisons, process illustrations — **HTML/CSS only, no images**.
- Content must use paragraphs not just bullets; support every concept with Java examples. Never skip explanations.
- Final slides: Java Cheat Sheet, Primitive Data Types Table, Operator Precedence Table, Java Keywords, Common Beginner Mistakes, Best Practices, Complete Course Summary.

### Syllabus (12 modules + final)
1. Introduction to Programming — What is Programming, Why Programming, How Computers Execute Instructions, Problem Solving, Computational Thinking, Algorithms, Flowcharts, Pseudocode, Programming Languages, Why Java
2. Getting Started with Java — Introduction to Java, History, Features, JDK, JRE, JVM, Installing Java, Installing VS Code/IntelliJ, Structure of a Java Program, Compilation Process, Execution Process, First Java Program, Comments
3. Variables & Data Types — Variables, Identifiers, Naming Conventions, Primitive Data Types, Literals, Type Casting, Constants (final)
4. Input, Output & Operators — Console Output, Scanner, Arithmetic, Assignment, Relational, Logical, Unary, Operator Precedence
5. Decision Making — if, if-else, else-if, Nested if, switch
6. Loops — for, while, do-while, Nested Loops, break, continue
7. Pattern Programming — Number Patterns, Star Patterns, Pyramid Patterns, Nested Loop Logic, Dry Run Techniques, Debugging Basics
8. Methods — What/Why Methods, Declaration, Calling, Parameters, Arguments, Return Type, Method Overloading (intro), Scope of Variables
9. Arrays — Introduction, Why Arrays, One-Dimensional Arrays, Traversal, User Input, Basic Operations
10. Strings — Introduction, String Creation, Common Methods, Comparison, Basic Manipulation
11. Introduction to OOP — What is OOP, Why OOP, Classes, Objects, Constructors, this Keyword
12. Mini Project — Console-Based Student Management System (Problem Statement, Planning, Flowchart, Complete Java Code, Sample Output, Code Explanation, Improvements)
Final — Java Cheat Sheet, Primitive Data Types Table, Operator Precedence Table, Java Keywords, Common Beginner Mistakes, Best Practices, Complete Course Summary, Thank You

---

## 2. Architecture (IMPORTANT — non-obvious decisions)

The app is **data-driven**. There are **four** files:

| File | Role | Status |
|------|------|--------|
| `index.html` | App shell: topbar, sidebar, slide stage, controls, toast. Loads `content.js` then `script.js`. | DONE (slide-app version) |
| `style.css` | All styling — skeuomorphic dark theme, slide layout, VS Code code blocks, diagrams, tables, controls. | **STALE — needs full rewrite** (see §4) |
| `script.js` | Slide ENGINE: renders current slide from data, keyboard nav, Prev/Next, dots, progress, sidebar outline, active highlight, search, copy buttons, practice/solution rendering, syntax highlighting. | **NOT STARTED** |
| `content.js` | All presentation content as a JS data structure: `window.DECK = [{type:'module',...},{type:'slide',...},...]`. | **NOT STARTED** |

### Slide data model (agreed schema)
`script.js` reads a global `window.DECK` array from `content.js`. Each item is an object:

```js
window.DECK = [
  // Module divider slide
  { type:'module', num:1, title:'Introduction to Programming',
    topics:['What is Programming?','Why Programming?', ...], desc:'...' },

  // Topic slide — rendered by engine
  { type:'slide', module:1, topic:'What is Programming?',
    body:[ /* ordered block objects, see below */ ] },

  // ... more slides ...

  // Final slides use the same body-block system
];

/* Each slide.body is an array of block objects. Supported block kinds:
   {k:'intro', p:'...'}                        -> "Introduction" section
   {k:'why', p:'...'}                           -> "Why is it needed" section
   {k:'analogy', p:'...'}                       -> real-life analogy callout
   {k:'def', p:'...'}                           -> technical definition
   {k:'explain', p:'...'}                       -> detailed explanation (paragraph(s))
   {k:'bul', items:[...]}                       -> bullet list
   {k:'syntax', code:'...', lang:'java', desc:'...'}  -> syntax block (lighter)
   {k:'code', file:'Hello.java', code:'...', output:'...', lines:[{n,code,explain}]}
                                                                              -> VS Code editor + output + line-by-line
   {k:'mistakes', items:[...]}
   {k:'best', items:[...]}
   {k:'summary', items:[...]}
   {k:'practice', conceptual:[...], coding:[...], predict:[...], debug:[...],
     solution:[{code, output, explain}]}
   {k:'table', head:[...], rows:[[...]]}
   {k:'flow', steps:[{label,type}]}             -> HTML/CSS flowchart (types: start/io/decision/end/box)
   {k:'flowRow', steps:[...]}                    -> horizontal flow row (branching) — optional later
   {k:'stack', title, cells:[{label,val}]}       -> memory diagram
   {k:'compare', title, a:{head,rows}, b:{head,rows}}
   {k:'heading', text}                           -> sub-heading inside a slide
   {k:'p', text}                                 -> generic paragraph
   {k:'raw', html}                               -> escape hatch (use sparingly)
*/
```

**Why this matters**: The engine is written ONCE in `script.js` and handles every block type. `content.js` only contains data — no rendering logic. This keeps content authoring simple and avoids duplicating HTML. When adding slides you ONLY edit `content.js`; you do NOT touch the engine unless you need a new block type.

### Block types the engine currently MUST support
`intro, why, analogy, def, explain, bul, syntax, code, mistakes, best, summary, practice, table, flow, stack, compare, heading, p, raw, module`.

If a needed block doesn't exist yet, ADD the renderer in `script.js` (one function `renderBLOCKTYPE(block)`) and register it in the `RENDERERS` map. Do not invent new top-level file layouts.

### Persistence
Slide index + "completed" flags saved to `localStorage` key `cjw_state` (object `{i:Number, done:Set-serialized-as-array}`) so progress survives refresh. Progress bar = current index / total slides.

### Syntax highlighting approach
A lightweight Java tokenizer in JS (regex-based) producing spans with classes `tk-key tk-type tk-str tk-num tk-com tk-fn tk-cls tk-bool tk-ann tk-op`. Keywords: `public static void class int double boolean char byte short long float String Scanner System if else for while do switch case break continue return new this final extends implements package import try catch default true false null`. Comments `//...` and `/*...*/`. Strings `"..."` and `'...'`. Numbers incl decimals. Class names = capitalized identifiers after `new`/`class` or typical. Escape HTML before tokenizing. Keep it simple and safe.

---

## 3. DONE so far (verified)

- `assets/images/` and `assets/icons/` folders created (empty; we use inline SVG/CSS, no image files needed).
- `index.html` — DONE (slide-app shell,Doctrine: topbar w/ brand+search+slide-pos+fullscreen; deck-progress bar; app w/ sidebar + stage; nav controls w/ prev/next/dots; toast). Loads `content.js` then `script.js`. ~83 lines.
- Decision finalized: **slides app, NOT scrolling site** (user confirmed via question tool).

## 4. STALE / WRONG / NOT DONE (honest state)

- `style.css` (35825 bytes) — **THIS IS THE OLD SCROLLING-PLATFORM CSS from the first prompt.** It is INCOMPATIBLE with the new slide shell (has `.topbar`, `.landing`, `.content`, `.prevnext`, `.sidebar` meant for a scrolling page; new shell needs `.stage`, `.slide`, `.controls`, `.dots`, slide-fit centering, etc.). **MUST be fully rewritten/overwritten** before anything will look right. Do NOT try to patch it — overwrite with slide-app CSS.
- `script.js` — **does not exist yet.** Must be created.
- `content.js` — **does not exist yet.** Must be created.

### Element IDs the new `index.html` expects (engine must wire these)
- `#menuBtn` (toggle sidebar), `#searchInput`, `#searchResults`
- `#slidePos` (text "i / n"), `#fsBtn` (fullscreen), `#deckProgress` + `#deckBar`
- `#sidebar`, `#outline`, `#outlineSub`, `#sbBackdrop`
- `#stage`, `#stageFit`, `#slide` (render target)
- `#prevBtn`, `#nextBtn`, `#dots`
- `#toast`

---

## 5. EXACT STEPS TO RESUME (do in this order)

1. **Read `index.html` fully** — know the exact IDs above.
2. **Overwrite `style.css`** with a complete slide-app stylesheet: design tokens (the color palette from prompt), topbar, deck-progress, app grid, sidebar (collapsible, sticky, with module groupings + topic rows + active highlight + done check), stage with centered slide that fits viewport (use `flex` centering + `max-height: calc(100vh - topbar - controls)` + `overflow:auto` only inside a slide if a topic genuinely overflows — prefer concise slides but allow internal scroll per slide), slide title header, all block renderers' styling (sections, callouts for analogy/tip/warn/error, bullets, syntax+code editor VS Code style with line numbers + copy btn + output box + line-explanation rows, tables, flowchart nodes+arrows, memory stack diagram, compare grids, practice accordion with solution reveal), controls bar (prev/next/dots), toast. Keep the modern-skeuomorphism look (gradients, inset relief shadows, raised pressable buttons). Responsive: sidebar becomes overlay on narrow screens; controls stack.
3. **Create `script.js`** (engine): on DOMContentLoaded, build `RENDERERS` map for every block type in §2; `renderSlide(i)` clears `#slide` and fills from `DECK[i]`; navigation `go(i)`, `next`, `prev`, `home`(i=0), `end`(i=last); wire `#prevBtn`/`#nextBtn` clicks; keyboard: ArrowRight/ArrowDown/Space/PageDown=next, ArrowLeft/ArrowUp/PageUp=prev, Home=first, End=last, `M`=toggle sidebar, `/`=focus search, `F`=fullscreen; build `#outline` from DECK grouping by module (with dividers); active outline row syncs to current slide; update `#slidePos`, `#deckBar` width, `#dots`; dots clickable; search filters DECK by topic/module, keyboard up/down + Enter to jump; copy button copies raw code + toast; practice solution shown as collapsible `<details>`; localStorage state save/restore on navigation; fullscreen via `document.documentElement.requestFullscreen()`. Escape exits sidebar/search. Keep code modular + commented.
4. **Create `content.js`** — define `window.DECK`. Build module dividers + slides IN ORDER per the §2/syllabus model. Start with Module 1 + Module 2 fully. Each topic slide's `body` uses the block kinds listed. Include real Java code, exact outputs, line-by-line explanations, 5 conceptual + 3 coding + 2 predict + 1 debug + solutions per topic. This is the long part. Because tokens are large, **finish the current module/slide and stop, then wait for "Continue".** Do not repeat prior slides on resume.
5. Continue `content.js` module by module (3→4→5→6→7→8→9→10→11→12→final). Append only.
6. **Verify**: open `index.html` in a browser; check navigation, keys, search, copy, progress, sidebar highlight, responsive. Fix issues.

### Resume checkpoint rule
If output truncates mid-`content.js`, end the message cleanly and tell the user "say Continue". On "Continue", **open `content.js`, read its end, and append the next module only.** Never rewrite `content.js` from scratch on a "Continue"; always append. Before appending, re-read the tail to know exactly where to resume.

---

## 6. Notes / gotchas

- `content.js` must define `window.DECK` with `var`/`window.DECK =` at top scope (loaded before `script.js`).
- Engine must handle `type:'module'` divider slides (render big module card with topic list; not counted as a content slide but DOES occupy a slide position and is navigable).
- Do NOT use images/SVG files for diagrams — pure HTML/CSS only.
- Keep slides readable on one screen; if a topic is large, the slide `.slide` content region may scroll internally (`overflow-y:auto`) but the deck itself never scrolls between slides.
- Colors palette (use as CSS vars): bg #121212/#1A1A1A/#202124; accent #4F8EF7/#64B5F6; success #66BB6A; warning #FFA726; error #EF5350.
- Fonts: Inter (UI) + JetBrains Mono (code). Already linked in index.html.
- The bookkeeping/conversation about "scrolling vs slides" lives here; do not revert to a scrolling design.
