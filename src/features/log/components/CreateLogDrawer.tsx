import { FC, useContext, useEffect, useState } from 'react';
import { UserAgentContext } from '@/stores/contexts/userAgent.context.ts';
import * as Styled from '../log.styles';
import { FormFilledInput, FormFilledSelect, FormFilledSelectValueMapping } from '@/libs/forms/formFilledComponents';
import { createLogFormFields, useCreateLogForm } from '../forms/CreateLogForm';
import { useAuth } from '@/hooks/authentication/useAuth.hook';
import { ProjectModel } from '@/types/models/project/project.model';

interface CreateLogDrawerProps {
  trigger: boolean;
  onClose: (trigger: boolean) => void;
}

const formattedTime = new Date().toLocaleTimeString('en-US');
export const CreateLogDrawer: FC<CreateLogDrawerProps> = ({ trigger, onClose }) => {
  const { user } = useAuth();
  const projectOptions = projectsToOptions(user.projects);
  const { isIos } = useContext(UserAgentContext);
  const { handleSubmit, control } = useCreateLogForm({});

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
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
      <Styled.DateTimeHolder>{formattedTime}</Styled.DateTimeHolder>
      <Styled.DrawerContent>
        <FormFilledSelect options={projectOptions} fieldMapping={createLogFormFields.projectId} control={control} />
        <FormFilledSelect options={projectOptions} fieldMapping={createLogFormFields.section} control={control} />
        <FormFilledInput fieldMapping={createLogFormFields.title} control={control} />
        <FormFilledInput fieldMapping={createLogFormFields.description} control={control} rows={4} />
        <Styled.CreateButton>Save Log</Styled.CreateButton>
      </Styled.DrawerContent>
    </Styled.BottomDrawer>
  );
};

function projectsToOptions(projects: ProjectModel[]): FormFilledSelectValueMapping[] {
  return projects
    ? projects.map((project) => {
        return {
          value: project.id,
          displayName: project.name,
        };
      })
    : [];
}
