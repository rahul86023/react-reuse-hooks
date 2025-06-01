import { useEffect, useRef, useState } from "react";

export function useStateWithCallback(initialState) {
  const [state, setState] = useState(initialState);
  const callbackRef = useRef(null);

  const updateState = (newState, callback) => {
    callbackRef.current = callback;
    setState(newState);
  };

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);
      callbackRef.current = null;
    }
  }, [state]);

  return [state, updateState];
}
