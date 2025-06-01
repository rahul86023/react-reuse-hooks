import { useEffect, useRef } from "react";

export function useWhyDidYouUpdate(name, props) {
  const previousProps = useRef();

  useEffect(() => {
    if (previousProps.current) {
      const changedProps = Object.entries(props).reduce(
        (diff, [key, value]) => {
          if (previousProps.current[key] !== value) {
            diff[key] = {
              from: previousProps.current[key],
              to: value,
            };
          }
          return diff;
        },
        {}
      );

      if (Object.keys(changedProps).length > 0) {
        console.log("[why-did-you-update]", name, changedProps);
      }
    }
    previousProps.current = props;
  });
}
