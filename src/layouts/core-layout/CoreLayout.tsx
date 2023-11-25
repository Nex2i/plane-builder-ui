import { FC } from 'react';
import { Routes } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import * as Styles from './Styles';
import { CoreAppbar } from './CoreAppbar.tsx';
import { useUserAgent } from '@/hooks/window/useUserAgent.tsx';
import CoreBottomNavigation from './CoreBottomNavigation.tsx';

interface coreLayoutProps {
  children: React.ReactNode;
}

export const CoreLayout: FC<coreLayoutProps> = ({ children }) => {
  const [parent] = useAutoAnimate(/* optional config */);

  const { isMobile } = useUserAgent();

  return (
    <Styles.CoreLayoutContainer>
      {!isMobile && (
        <Styles.CoreLayoutAppbar>
          <CoreAppbar />
        </Styles.CoreLayoutAppbar>
      )}
      <Styles.CoreRow>
        <Styles.CoreLayoutOutlet>
          <Styles.CoreCardContent ref={parent}>
            <Routes>{children}</Routes>
          </Styles.CoreCardContent>
        </Styles.CoreLayoutOutlet>
      </Styles.CoreRow>
      {isMobile && <CoreBottomNavigation />}
    </Styles.CoreLayoutContainer>
  );
};
