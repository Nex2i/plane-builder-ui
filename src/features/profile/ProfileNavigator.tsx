import { Typography } from '@mui/material';
import { FC } from 'react';
import * as Styled from './profile.styles';
import { useAuth } from '@/hooks/authentication/useAuth.hook';

interface ProfileNavigatorProps {}

export const ProfileNavigator: FC<ProfileNavigatorProps> = ({}) => {
  const { logout } = useAuth();
  return (
    <Styled.Column align="left">
      <Typography mt={2} variant="h4">
        My Projects
      </Typography>
      <Typography variant="body2" onClick={() => logout()}>
        Logout
      </Typography>
    </Styled.Column>
  );
};
