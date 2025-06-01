# ⚛️ react-reuse-hooks

A lightweight and powerful collection of **28+ reusable custom React hooks** to supercharge your development. Simplify your logic for state management, side effects, performance optimizations, form handling, storage, and more — all in one compact package.

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

| Hook                   | Description                    | Example Usage                                                    |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------- |
| `useLocalStorage`      | Sync state with localStorage   | `const [value, setValue] = useLocalStorage('key', 'default')`    |
| `useDebounce`          | Debounce a value               | `const debounced = useDebounce(inputValue, 500)`                 |
| `useToggle`            | Toggle a boolean               | `const [isOn, toggle] = useToggle(false)`                        |
| `useClickOutside`      | Detect outside clicks          | `useClickOutside(ref, () => alert('Clicked outside!'))`          |
| `useThrottle`          | Throttle a value update        | `const throttled = useThrottle(inputValue, 300)`                 |
| `usePrevious`          | Get previous value             | `const prev = usePrevious(value)`                                |
| `useTimeout`           | Run function after delay       | `useTimeout(() => alert('Hello'), 1000)`                         |
| `useUpdateEffect`      | Effect only on update          | `useUpdateEffect(() => {}, [count])`                             |
| `useHover`             | Detect hover                   | `const [ref, hovered] = useHover()`                              |
| `useOnlineStatus`      | Track online status            | `const online = useOnlineStatus()`                               |
| `useCopyToClipboard`   | Copy text to clipboard         | `const [copied, copy] = useCopyToClipboard()`                    |
| `useClipboard`         | Also allows clipboard copying  | `const [copied, setClipboard] = useClipboard()`                  |
| `useDarkMode`          | Toggle dark mode               | `const [darkMode, toggleDarkMode] = useDarkMode()`               |
| `useScrollPosition`    | Get scroll position            | `const pos = useScrollPosition()`                                |
| `useWindowSize`        | Get window size                | `const { width, height } = useWindowSize()`                      |
| `useEventListener`     | Add event listener             | `useEventListener('resize', handleResize)`                       |
| `useOnScreen`          | Detect element visibility      | `const visible = useOnScreen(ref)`                               |
| `useWhyDidYouUpdate`   | Debug re-renders               | `useWhyDidYouUpdate('MyComponent', props)`                       |
| `useFocus`             | Handle focus state             | `const [ref, focused] = useFocus()`                              |
| `useGeolocation`       | Get geolocation                | `const { latitude, longitude } = useGeolocation()`               |
| `useElementSize`       | Get element dimensions         | `const [ref, size] = useElementSize()`                           |
| `useDeviceOrientation` | Get device orientation data    | `const { alpha, beta, gamma } = useDeviceOrientation()`          |
| `useForceUpdate`       | Force re-render                | `const forceUpdate = useForceUpdate()`                           |
| `useInput`             | Manage input field logic       | `const { value, onChange, reset } = useInput()`                  |
| `useStateWithCallback` | State with callback on update  | `const [count, setCount] = useStateWithCallback(0, cb)`          |
| `useSessionStorage`    | Use session storage like state | `const [data, setData] = useSessionStorage('key', initialValue)` |
| `useKeyPress`          | Detect specific key press      | `const isEnter = useKeyPress('Enter')`                           |
| `useCookie`            | Manage browser cookies         | `const [cookie, setCookie] = useCookie('user')`                  |


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
