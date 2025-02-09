import { useEffect, useState } from "react";

interface ScreenSizeInterface {
  isMobile: boolean;
  isWeb: boolean;
}

const useScreenSize = (): ScreenSizeInterface => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
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
