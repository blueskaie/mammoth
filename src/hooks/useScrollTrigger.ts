import { useEffect, useState } from "react";

export const useScrollTrigger = (clientHeight = 50): boolean => {
  const [triggerScroll, setTriggerScroll] = useState<boolean>(false);
  function handleScroll(e: any) {
    e.preventDefault();
    if (window.scrollY > clientHeight) {
      setTriggerScroll(true);
    } else if (window.scrollY < clientHeight) {
      setTriggerScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return triggerScroll;
};
