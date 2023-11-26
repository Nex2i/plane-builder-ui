import { Avatar, Typography } from '@mui/material';
import { FC } from 'react';
import * as Styled from './profile.styles';
import { useAuth } from '@/hooks/authentication/useAuth.hook';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface ProfileNavigatorProps {}

export const ProfileNavigator: FC<ProfileNavigatorProps> = ({}) => {
  const { logout, user } = useAuth();
  return (
    <Styled.Column align="left">
      <Styled.Column align="center">
        <Avatar alt={user.email} src={user.picture} sx={{ width: 100, height: 100 }} />
        <Typography variant="h6">{user.userName}</Typography>
      </Styled.Column>
      <Styled.CenterTypography mt={2} variant="h4">
        <ArrowRightIcon fontSize="large" />
        My Projects
      </Styled.CenterTypography>
      <Styled.LogoutLink variant="body2" onClick={() => logout()}>
        Logout
      </Styled.LogoutLink>
    </Styled.Column>
  );
};
