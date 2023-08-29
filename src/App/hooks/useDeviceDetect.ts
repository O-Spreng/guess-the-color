import {useEffect, useState} from "react";

export default function useDeviceDetect() {
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false);
  const [isExtraSmallDevice, setIsExtraSmallDevice] = useState<boolean>(false);


  useEffect(() => {
    const windowWidth = window ? window.innerWidth : 0;
    const small = windowWidth <= 860;
    const smaller = windowWidth <= 480;
    setIsSmallDevice(small);
    setIsExtraSmallDevice(smaller)
  }, []);

  return {isSmallDevice, isExtraSmallDevice};
}
