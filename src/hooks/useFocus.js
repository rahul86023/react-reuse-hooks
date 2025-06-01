import { useState, useEffect, useRef } from "react";

export function useFocus() {
  const [focused, setFocused] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    node.addEventListener("focus", onFocus);
    node.addEventListener("blur", onBlur);

    return () => {
      node.removeEventListener("focus", onFocus);
      node.removeEventListener("blur", onBlur);
    };
  }, [ref]);

  return [ref, focused];
}
