import * as React from "react";

export const useSticky = () => {
  const [isSticky, setIsSticky] = React.useState(false);
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollTop && currentScrollY > 0) {
        setIsSticky(true);
      } else if (currentScrollY > lastScrollTop || currentScrollY === 0) {
        setIsSticky(false);
      }
      setLastScrollTop(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  return { isSticky };
};
