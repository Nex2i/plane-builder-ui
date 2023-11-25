import { BottomNavigation, BottomNavigationAction, Box, Card, Drawer, styled } from '@mui/material';
export * from '@/common/style';

export const CoreLayoutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const CoreLayoutAppbar = styled(Box)`
  display: flex;
`;

export const CoreLayoutSidebar = styled(Box)``;

export const CoreRow = styled(Box)`
  display: flex;
`;

export const CoreLayoutOutlet = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
`;

export const CoreCardContent = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  margin: 0,
}));

export const CoreDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    position: relative;
    margin: 0;
    border-radius: 0;
  }
`;

export const BottomNavigationContainer = styled(BottomNavigation)(({}) => ({
  position: 'relative',
  paddingBottom: '15px', // Adjust this for the circle button
}));

export const CreateAction = styled(BottomNavigationAction)(({}) => ({
  position: 'absolute',
  top: '-15px', // Half outside
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  cursor: 'pointer',
}));

export const BottomNavigationButton = styled(BottomNavigationAction)(({}) => ({
  cursor: 'pointer',
}));
