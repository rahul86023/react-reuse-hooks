# ⚛️ react-reuse-hooks

A lightweight, reusable collection of custom React hooks to accelerate development and simplify common logic like state management, debouncing, toggling, local storage, and more.

Created with ❤️ by **Rahul Chaurasia**

---

## 📦 Installation

Install via npm or yarn:

```bash
npm install react-reuse-hooks
# or
yarn add react-reuse-hooks
🧩 Available Hooks
1️⃣ useLocalStorage
Synchronize state with localStorage.

js
Copy
Edit
import { useLocalStorage } from 'react-reuse-hooks';

const [value, setValue] = useLocalStorage('key', 'default');
Param	Type	Default	Description
key	string	—	Storage key
initialValue	any	'default'	Initial value

2️⃣ useDebounce
Delays a value update until after a delay.

js
Copy
Edit
import { useDebounce } from 'react-reuse-hooks';

const debouncedValue = useDebounce(inputValue, 500);
Param	Type	Default	Description
value	any	—	The value to debounce
delay	number	500	Delay in milliseconds

3️⃣ useToggle
Simple boolean toggle hook.

js
Copy
Edit
import { useToggle } from 'react-reuse-hooks';

const [isOn, toggle] = useToggle(false);
Param	Type	Default	Description
initialValue	boolean	false	Initial toggle value

4️⃣ useClickOutside
Detects clicks outside a referenced element.

js
Copy
Edit
import { useClickOutside } from 'react-reuse-hooks';

const ref = useRef();
useClickOutside(ref, () => alert('Clicked outside!'));
Param	Type	Description
ref	ref	React ref to target element
callback	function	Function to run on outside click

🧪 Example Usage
bash
Copy
Edit
npx create-react-app my-app
cd my-app
npm install react-reuse-hooks
Then in your App.js:

js
Copy
Edit
import React, { useState, useRef } from 'react';
import {
  useLocalStorage,
  useDebounce,
  useToggle,
  useClickOutside
} from 'react-reuse-hooks';

function App() {
  const [name, setName] = useLocalStorage('name', 'Rahul');
  const [isDark, toggleDark] = useToggle();
  const [input, setInput] = useState('');
  const debounced = useDebounce(input, 300);
  const modalRef = useRef();

  useClickOutside(modalRef, () => console.log('Clicked outside modal'));

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Debounced: {debounced}</p>
      <button onClick={toggleDark}>{isDark ? 'Disable' : 'Enable'} Dark Mode</button>
      <div ref={modalRef}>Click outside me!</div>
    </div>
  );
}

export default App;