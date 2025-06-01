import { useState } from "react";

export function useCopyToClipboard() {
  const [success, setSuccess] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      setSuccess(false);
    }
  };

  return [success, copy];
}
