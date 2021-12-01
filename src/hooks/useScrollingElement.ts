import { useEffect } from "react";

const scrollingElement = (): any => {
  return document.scrollingElement || document.documentElement;
};

const getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

const useScrollingElement = (trigger: any) => {
  useEffect(() => {
    if (trigger) {
      scrollingElement().style.paddingRight = `${getScrollbarWidth()}px`;
      scrollingElement().style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      scrollingElement().style.overflow = "auto";
      scrollingElement().style.paddingRight = 0;
      document.body.style.touchAction = "auto";
    }
  }, [trigger]);
};

export default useScrollingElement;
