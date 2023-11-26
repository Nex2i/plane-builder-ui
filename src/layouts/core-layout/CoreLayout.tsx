import { FC, useContext } from 'react';
import { Routes } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { UserAgentContext } from '@/stores/contexts/userAgent.context.ts';
import * as Styles from './Styles';
import { CoreAppbar } from './CoreAppbar.tsx';
import CoreBottomNavigation from './CoreBottomNavigation.tsx';
import { Typography } from '@mui/material';

interface coreLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const CoreLayout: FC<coreLayoutProps> = ({ children, title }) => {
  const [parent] = useAutoAnimate(/* optional config */);

  const { isMobile } = useContext(UserAgentContext);

  return (
    <Styles.CoreLayoutContainer>
      {!isMobile && <CoreAppbar />}
      <Styles.CoreRow>
        <Styles.CoreLayoutOutlet ref={parent}>
          {title && (
            <Styles.CoreRow width="100%">
              <Typography align="left" variant="h2">
                {title}
              </Typography>
            </Styles.CoreRow>
          )}
          <Routes>{children}</Routes>
        </Styles.CoreLayoutOutlet>
      </Styles.CoreRow>
      {isMobile && <CoreBottomNavigation />}
    </Styles.CoreLayoutContainer>
  );
};
