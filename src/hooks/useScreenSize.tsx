import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 694);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 694);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile,
    isWeb: !isMobile,
  };
};

export default useScreenSize;
