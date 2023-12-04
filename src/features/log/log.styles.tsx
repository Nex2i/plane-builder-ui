export * from '@/common/style';

import { SwipeableDrawer, styled } from '@mui/material';

export const BottomDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  width: '100vw',
}));
