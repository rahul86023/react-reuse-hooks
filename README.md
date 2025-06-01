# ⚛️ react-reuse-hooks

A lightweight and powerful collection of **30+ reusable custom React hooks** to supercharge your development. Simplify your logic for state management, side effects, performance optimizations, form handling, storage, and more — all in one compact package.

Created with ❤️ by **Rahul Chaurasia**

---

## 📦 Installation

```bash
npm install react-reuse-hooks
# or
yarn add react-reuse-hooks
```

---

## 📚 Hook Usage Summary Table

| Hook                   | Description                  | Example Usage                                                 |
| ---------------------- | ---------------------------- | ------------------------------------------------------------- |
| `useLocalStorage`      | Sync state with localStorage | `const [value, setValue] = useLocalStorage('key', 'default')` |
| `useDebounce`          | Debounce a value             | `const debounced = useDebounce(inputValue, 500)`              |
| `useToggle`            | Toggle a boolean             | `const [isOn, toggle] = useToggle(false)`                     |
| `useClickOutside`      | Detect outside clicks        | `useClickOutside(ref, () => alert('Clicked outside!'))`       |
| `useThrottle`          | Throttle a value update      | `const throttled = useThrottle(inputValue, 300)`              |
| `usePrevious`          | Get previous value           | `const prev = usePrevious(value)`                             |
| `useTimeout`           | Run function after delay     | `useTimeout(() => alert('Hello'), 1000)`                      |
| `useUpdateEffect`      | Effect only on update        | `useUpdateEffect(() => {}, [count])`                          |
| `useIsFirstRender`     | Check first render           | `const first = useIsFirstRender()`                            |
| `useHover`             | Detect hover                 | `const [ref, hovered] = useHover()`                           |
| `useInterval`          | Run function at intervals    | `useInterval(() => console.log('Tick'), 1000)`                |
| `useOnlineStatus`      | Track online status          | `const online = useOnlineStatus()`                            |
| `useCopyToClipboard`   | Copy text to clipboard       | `const [copied, copy] = useCopyToClipboard()`                 |
| `useDarkMode`          | Toggle dark mode             | `const [darkMode, toggleDarkMode] = useDarkMode()`            |
| `useDocumentTitle`     | Set document title           | `useDocumentTitle('My App')`                                  |
| `useScrollPosition`    | Get scroll position          | `const pos = useScrollPosition()`                             |
| `useWindowSize`        | Get window size              | `const { width, height } = useWindowSize()`                   |
| `useEventListener`     | Add event listener           | `useEventListener('resize', handleResize)`                    |
| `useOnScreen`          | Detect element visibility    | `const visible = useOnScreen(ref)`                            |
| `useWhyDidYouUpdate`   | Debug re-renders             | `useWhyDidYouUpdate('MyComponent', props)`                    |
| `useDeepCompareEffect` | Deep compare dependencies    | `useDeepCompareEffect(() => {}, [obj])`                       |
| `useMediaQuery`        | Media query matcher          | `const matches = useMediaQuery('(max-width: 768px)')`         |
| `useLockBodyScroll`    | Lock body scroll             | `useLockBodyScroll()`                                         |
| `useLongPress`         | Handle long press events     | `const bind = useLongPress(callback, { delay: 500 })`         |
| `useFocus`             | Handle focus state           | `const [ref, focused] = useFocus()`                           |
| `useGeolocation`       | Get geolocation              | `const { latitude, longitude } = useGeolocation()`            |
| `useBatteryStatus`     | Monitor battery status       | `const battery = useBatteryStatus()`                          |
| `useNetworkStatus`     | Network status checker       | `const isOnline = useNetworkStatus()`                         |
| `useIdle`              | Detect user idle             | `const isIdle = useIdle(3000)`                                |
| `useEffectOnce`        | Effect that runs once        | `useEffectOnce(() => init())`                                 |

---

## ✨ Full Example Usage

```bash
npx create-react-app my-app
cd my-app
npm install react-reuse-hooks
```

### `App.js`

```jsx
import React, { useState, useRef } from 'react';
import {
  useLocalStorage,
  useDebounce,
  useThrottle,
  useToggle,
  useClickOutside
} from 'react-reuse-hooks';

function App() {
  const [name, setName] = useLocalStorage('name', 'Rahul');
  const [isDark, toggleDark] = useToggle();
  const [input, setInput] = useState('');
  const debounced = useDebounce(input, 300);
  const throttled = useThrottle(input, 300);
  const modalRef = useRef();

  useClickOutside(modalRef, () => console.log('Clicked outside modal'));

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Debounced: {debounced}</p>
      <p>Throttled: {throttled}</p>
      <button onClick={toggleDark}>{isDark ? 'Disable' : 'Enable'} Dark Mode</button>
      <div ref={modalRef}>Click outside me!</div>
    </div>
  );
}

export default App;
```

---

## 📚 My Bestselling Tech Books on Amazon Kindle

Supercharge your React and JavaScript knowledge with these practical, interview-focused books by **Rahul Chaurasia**. 🚀 600+ developers have already leveled up their skills — now it's your turn!

### 📘 [React JS Machine Coding Projects](https://a.co/d/dNf5XWF)

Build 30 real-world React components asked in interviews — from star ratings to quiz apps.

### 📗 [Redux & Redux Toolkit With React](https://a.co/d/6N7W1nO)

Master Redux and Redux Toolkit with practical, scalable React patterns.

### 📙 [JavaScript Interview Mastery](https://a.co/d/ecKYKwU)

Ace any JS interview with this ultimate guide covering 100+ theory questions.

### 📕 [Top 50 Most Asked JavaScript Coding Questions in Interviews](https://a.co/d/cSFJLry)

Practice must-know logic questions (arrays, strings, promises, objects).

### 📒 [Mastering ES6](https://a.co/d/i3xB8lf)

Deep dive into essential ES6 concepts every developer should master.

> ⭐ These books are beginner-friendly, interview-validated, and written in a simple, clear language. Perfect for self-paced learners and job seekers.

---

## 🌟 Contributions Welcome

Have an idea for a new hook or an improvement? Feel free to open a pull request or raise an issue.

---

## 📜 License

MIT © 2025 Rahul Chaurasia
