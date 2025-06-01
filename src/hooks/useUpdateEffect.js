import { useEffect, useRef } from "react";

export function useUpdateEffect(effect, deps) {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, deps);
}
