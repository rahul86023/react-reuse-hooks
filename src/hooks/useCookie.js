import { useState } from "react";

export function useCookie(name, initialValue) {
  const getCookie = () => {
    const matches = document.cookie.match(
      new RegExp(
        `(?:^|; )${name.replace(/([\.$?*|{}()\[\]\\\/\+^])/g, "\\$1")}=([^;]*)`
      )
    );
    return matches ? decodeURIComponent(matches[1]) : initialValue;
  };

  const [cookie, setCookieState] = useState(getCookie);

  const setCookie = (value, days) => {
    const expires = days
      ? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`
      : "";
    document.cookie = `${name}=${encodeURIComponent(
      value || ""
    )}${expires}; path=/`;
    setCookieState(value);
  };

  return [cookie, setCookie];
}
