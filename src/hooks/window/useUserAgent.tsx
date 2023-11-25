import React, { useState, useEffect } from 'react';

// Define a type for the return value
type UserAgentInfo = {
  isMobile: boolean;
  userAgentName: string;
};

export function useUserAgent(): UserAgentInfo {
  // Function to detect if the device is mobile
  const detectMobile = (userAgent: string): boolean => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  };

  // Initial state using navigator.userAgent
  const [userAgentInfo, setUserAgentInfo] = useState<UserAgentInfo>(() => {
    const userAgent = navigator.userAgent;
    return {
      isMobile: detectMobile(userAgent),
      userAgentName: userAgent,
    };
  });

  useEffect(() => {
    // Update the state when the component mounts
    setUserAgentInfo({
      isMobile: detectMobile(navigator.userAgent),
      userAgentName: navigator.userAgent,
    });
  }, []);

  return userAgentInfo;
}
