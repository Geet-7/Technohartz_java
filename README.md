# Core Java Workshop — Developer & Codebase Guide

Welcome to the **Core Java Workshop** codebase! This guide is written to help anyone—from a complete beginner to an experienced teacher—understand, maintain, run, and extend this interactive slide presentation application.

---

## 1. What the Project Is
This project is a **custom-built, lightweight, interactive presentation slide engine** for teaching Core Java concepts. Unlike static PDF/PPT slides, it provides:
- **Interactive Slide Outlines** with checking/completion ticks to track progress.
- **Embedded Syntax-Highlighted Code Blocks** (simulating code editors).
- **Run Outputs & Explanations** mapped line-by-line to sample programs.
- **Interactive Practice & Exercises** on almost every slide (including Conceptual Q&A, Coding Drills, Output Predictions, and Bug-Debugging challenges) with toggleable solution drawers.
- **Pure CSS Layout Diagrams** representing technical processes: Memory Stack cells, comparison column layouts, flowchart nodes (oval terminator, skewed parallelogram I/O, rotated diamond decisions), and more.
- **Teacher/Presenter friendly utilities**: A high-contrast Light Theme and a **Projector Mode** that dynamically scales up font sizes by ~30% for visibility on classrooms projectors.

---

## 2. What Has Been Done (Completed Features)

### Presenter Controls & Modes
- **Theme Toggling (`T`):** Seamless transition between a dark modern IDE theme and a high-contrast Light Theme.
- **Projector Mode (`P`):** Scales all font sizes up by ~30% for presentation legibility.
- **Fullscreen Toggling (`F` or `⛶` button):** Enters/exits browser fullscreen.
- **Auto-Collapse Navigation:** When entering fullscreen, the sidebar automatically collapses to give the slide content maximum screen real estate.
- **Fluid Layout Expansion:** Slide width expands to `96vw` under fullscreen/collapsed states to minimize wasted space.
- **Persistent State:** Saves current slide position, checked/completed slides progress, theme preference, and projector zoom mode to `localStorage`.

### Realignment of Slide Elements
- All slide blocks in the slide engine have been aligned between the rendering schema and `style.css` selectors (replacing old layout classes with clean modern BEM-style classes).
- Flowchart blocks support standard flowchart shapes: Start/End terminator ovals, I/O parallelograms (using CSS skews), and Decision diamonds (using CSS rotations) with un-rotated/un-skewed text spans so the letters stay horizontal.
- Analogies have been completely stripped out of all slides at the user's request.
- Supported custom graphics by writing an `image` block renderer that displays copyright-free illustrations.

---

## 3. What Things Are Remaining (Roadmap)
- **Interactive Playground / Code Runner:** Embedding an in-browser Java Compiler or code runner using a sandboxed backend API to let students run code directly on slides.
- **Student Progress Dashboard:** A summary report slide showing overall score and completed modules/quizzes statistics for the teacher.
- **Slide Search Filters:** Filtering outline by "Slides containing Coding Exercises" or "Slides with Flowcharts" to let teachers query materials quickly.

---

## 4. Known Bugs & Resolved Issues (Troubleshooting)

### Resolved: Strict-Mode Assignment Crash
- **Bug:** Chrome showed a blank page with `Uncaught ReferenceError: slideEl is not defined`.
- **Cause:** `script.js` used `'use strict';` inside the closure, but variables (like `slideEl`, `dotsEl`, `prevBtn`, etc.) were assigned inside the `init()` function without being declared in the scope using `var`, `let`, or `const`.
- **Fix:** Declared all elements at the top of the `script.js` closure block.

### Resolved: DOM Object `[object HTMLDivElement]` String Conversion Bug
- **Bug:** Heading blocks and paragraph blocks rendered as `[object HTMLDivElement]` or `[object HTMLParagraphElement]` text strings.
- **Cause:** The `heading` and `p` renderers returned DOM element objects, but were passed directly to `el('div', 'block', DOM_ELEMENT)` as the third argument. The `el()` helper assigned the third argument directly to `innerHTML`, forcing the browser to stringify the element object.
- **Fix:** Rewrote `heading` and `p` renderers in `script.js` to create empty wrapper blocks and append the child elements using the native DOM `.appendChild()` method.

### Resolved: Network Path Browser Caching
- **Bug:** Reloading the browser did not load updated script files on local system files because Chrome cached local file structures.
- **Fix:** Appended query parameters (`content.js?v=2` and `script.js?v=2`) to script tags inside `index.html` to force Chrome to reload scripts from disk.

---

## 5. Codebase Architecture & File Guide

The project consists of 3 core files, plus layout assets:

- **[index.html](file:///c:/Users/geetl/OneDrive/Desktop/learning/ML/Technohartz_java/index.html)**: The page structure/shell defining the navigation bar, sidebar, stages, progress indicators, theme and zoom controllers.
- **[content.js](file:///c:/Users/geetl/OneDrive/Desktop/learning/ML/Technohartz_java/content.js)**: The slide database (`window.DECK`) carrying modules, topics, code strings, practice questions, and diagram layouts.
- **[script.js](file:///c:/Users/geetl/OneDrive/Desktop/learning/ML/Technohartz_java/script.js)**: The slide compiler and control engine resolving key events, progress saves, sidebars, copy requests, and block render loops.
- **[style.css](file:///c:/Users/geetl/OneDrive/Desktop/learning/ML/Technohartz_java/style.css)**: The styles and layout system carrying high contrast light variables, large-scale typography for projector view, collapses, grid ratios, and flowchart shapes.

---

## 6. How to Extend the Codebase (Newbie Guide)

### Adding a New Slide
To create a slide, open [content.js](file:///c:/Users/geetl/OneDrive/Desktop/learning/ML/Technohartz_java/content.js), locate the correct module list, and append a new object inside the `window.DECK` array:

```javascript
  {
    type: 'slide',
    module: 1,
    topic: 'My First Java Slide',
    body: [
      { k: 'intro', p: 'This is my introductory paragraph.' },
      { k: 'heading', text: 'Important Syntax' },
      {
        k: 'code',
        file: 'HelloWorld.java',
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}`,
        output: 'Hello!'
      }
    ]
  },
```

### Adding a New Custom Block Type
If you want to support a new slide block type (e.g. `{ k: 'quiz', q: '...', options: [] }`):
1. In [script.js](file:///c:/Users/geetl/OneDrive/Desktop/learning/ML/Technohartz_java/script.js), go to `var RENDERERS = { ... }`.
2. Add your custom renderer:
   ```javascript
   quiz: function(b) {
     var d = el('div', 'block block--quiz');
     d.appendChild(el('div', 'quiz-title', b.q));
     // create elements for options and return the block container d
     return d;
   }
   ```
3. Style the class `.block--quiz` and `.quiz-title` in [style.css](file:///c:/Users/geetl/OneDrive/Desktop/learning/ML/Technohartz_java/style.css).
