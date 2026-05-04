import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls the window to the top whenever the route changes (unless a hash is present). */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let in-page anchors work
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
