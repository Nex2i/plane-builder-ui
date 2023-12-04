export * from '@/common/style';

import { Box, SwipeableDrawer, styled } from '@mui/material';

export const BottomDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  width: '100vw',
}));

export const Puller = styled(Box)(({ theme }) => ({
  width: 64,
  height: 8,
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[900],
  borderRadius: theme.spacing(2),
  position: 'absolute',
  top: 12,
  left: 'calc(50% - 15px)',
}));

export const DrawerContent = styled(Box)(({ theme }) => ({
  // marginTop: theme.spacing(2),
  padding: theme.spacing(4),
}));
