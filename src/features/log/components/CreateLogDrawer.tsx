import { Drawer } from '@mui/material';
import { UserAgentContext } from '@/stores/contexts/userAgent.context.ts';
import { FC, useContext, useEffect, useState } from 'react';
import * as Styled from '../log.styles';

interface CreateLogDrawerProps {
  trigger: boolean;
  onClose: (trigger: boolean) => void;
}

export const CreateLogDrawer: FC<CreateLogDrawerProps> = ({ trigger, onClose }) => {
  const { isIos } = useContext(UserAgentContext);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log('trigger', trigger);
    setIsOpen(trigger);
  }, [trigger]);

  const toggleDrawerClose = () => {
    setIsOpen(false);
    onClose(false);
  };
  const toggleDrawerOpen = () => {
    setIsOpen(true);
  };
  return (
    <Styled.BottomDrawer
      anchor="bottom"
      open={isOpen}
      onClose={toggleDrawerClose}
      onOpen={toggleDrawerOpen}
      disableDiscovery={isIos}
    >
      <Styled.Puller />
      <Styled.DrawerContent>IM IN A DRAWER</Styled.DrawerContent>
    </Styled.BottomDrawer>
  );
};
