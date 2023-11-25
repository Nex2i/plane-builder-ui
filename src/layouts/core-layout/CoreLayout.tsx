import { FC, useContext } from 'react';
import { Routes } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { UserAgentContext } from '@/stores/contexts/userAgent.context.ts';
import * as Styles from './Styles';
import { CoreAppbar } from './CoreAppbar.tsx';
import CoreBottomNavigation from './CoreBottomNavigation.tsx';

interface coreLayoutProps {
  children: React.ReactNode;
}

export const CoreLayout: FC<coreLayoutProps> = ({ children }) => {
  const [parent] = useAutoAnimate(/* optional config */);

  const { isMobile } = useContext(UserAgentContext);

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
