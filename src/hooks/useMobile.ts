import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= breakpoint);
  };

  useEffect(() => {
    // Add event listener to handle window resize (only if in the browser)
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= breakpoint);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [breakpoint]);

  return { isMobile };
};

export default useIsMobile;
