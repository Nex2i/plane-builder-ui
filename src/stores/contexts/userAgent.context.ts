import { createContext } from 'react';

type UserAgentInfo = {
  isMobile: boolean;
  userAgentName: string;
};

const userAgent = navigator.userAgent;

const detectMobile = (userAgent: string): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};
export const initializeUserAgent: UserAgentInfo = {
  isMobile: detectMobile(userAgent),
  userAgentName: userAgent,
};

export const UserAgentContext = createContext<UserAgentInfo>(initializeUserAgent);
