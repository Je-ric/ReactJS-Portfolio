# React Components Overview

This is a beginner-friendly guide to understanding React components, state, props, and hooks.

---

## 1. What is a Component?

A **component** is a reusable piece of a React app that can display UI, handle events, and manage data. Components can be of two main types:

### **Class Components**
- Use the `class` keyword.
- Always use a `render()` method before `return`.
- Use `this` keyword to access **state** and **props**.
- Can use lifecycle methods like `componentDidMount`, `componentDidUpdate`.

**Advantages:**
- Full features of React.
- Supports older React projects.

**Disadvantages:**
- More verbose and harder to read.
- Syntax can be confusing for beginners.

---

### **Functional Components**
- Written as plain JavaScript functions.
- Return JSX directly (no `render()` needed).
- Use **hooks** like `useState` and `useEffect` to manage state and side effects.

**Advantages:**
- Shorter, simpler, and easier to maintain.
- Encourages cleaner code and better performance.
- Preferred for modern React apps.

**Disadvantages:**
- Beginners may struggle with hooks initially.

---

## 2. Props and State

- **Props:** Read-only values passed to a component from its parent. Used to customize components.
- **State:** Internal data that a component manages and can change over time.

---

## 3. Common Hooks in Functional Components

- **useState:** Allows a functional component to store and update internal data (state).
- **useEffect:** Runs side effects (e.g., fetching data, updating the DOM) in functional components, similar to lifecycle methods in class components.

---

## 4. Key Differences: Class vs Functional

| Feature               | Class Component               | Functional Component             |
|-----------------------|-------------------------------|---------------------------------|
| Declaration           | `class` keyword               | Function                        |
| Return of JSX         | Inside `render()` method      | Directly in `return`            |
| Access State/Props    | `this.state`, `this.props`    | `useState`, `props`             |
| Lifecycle Methods     | Built-in methods              | `useEffect` hook                |
| Readability           | More verbose                  | Cleaner, easier to read         |
| Modern Usage          | Mostly legacy code            | Recommended for new projects    |

---

**Summary:**  
Use **functional components** with hooks for modern apps. Use **class components** only if working on older code or when lifecycle methods are required without hooks.
