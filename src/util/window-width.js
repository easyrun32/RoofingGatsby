import { useLayoutEffect, useState } from "react";
export function useWindowSize(defaultValue) {
  const [windowSize, setWindowSize] = useState({ innerWidth: defaultValue });
  useLayoutEffect(() => {
    setWindowSize({ innerWidth: window.innerWidth });
  }, []);

  return windowSize;
}
export default useWindowSize;
