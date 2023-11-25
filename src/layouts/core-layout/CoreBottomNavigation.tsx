import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import * as Styled from './Styles';

export default function CoreBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Styled.BottomNavigationContainer
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <Styled.BottomNavigationButton value={'logs'} label="Logs" icon={<ListAltIcon />} />
          <Styled.CreateAction value={'create'} label="" icon={<Styled.CreateActionIcon />} />
          <Styled.BottomNavigationButton value={'profile'} label="Profile" icon={<AccountCircleIcon />} />
        </Styled.BottomNavigationContainer>
      </Paper>
    </Box>
  );
}
