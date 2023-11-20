import { Button, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';

import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormFilledInput } from '@/libs/forms/formFilledComponents';
import { LoadingComponent } from '@/components/loading/Loading.Component';
import { useLogin } from '@/hooks/authentication/useLogin.hook';
import { homeRoute } from '@/routes/RouteConstants';
import * as Styled from '../auth.styles';
import { loginFormFields, useLoginForm } from './loginForm';

interface LoginProps {}

export const Login: FC<LoginProps> = ({}) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<{ username: string; password: string }>({ username: '', password: '' });
  const [_, isAuthorizing, isAuthorized] = useLogin(formValues.username, formValues.password);

  useEffect(() => {
    if (isAuthorized) {
      navigate(homeRoute);
    }
  }, [isAuthorized]);

  const { handleSubmit, control } = useLoginForm({
    username: '',
    password: '',
  });

  const google = () => {
    window.open('http://localhost:8085/api/auth/v1/open/passport/google', '_self');
  };

  const handleValidForm = (formData: FieldValues) => {
    const formInfo = loginFormFields.createEditSaveRequest(formData);
    setFormValues(formInfo);
  };

  const handleInvalidForm = (formData: FieldValues) => {
    console.log('invalid form', formData);
  };
  const onSubmitForm = handleSubmit(handleValidForm, handleInvalidForm);

  return (
    <div>
      <Styled.BaseForm onSubmit={onSubmitForm}>
        <Typography variant={'h2'}>Sign in</Typography>
        <FormFilledInput fieldMapping={loginFormFields.username} control={control} />
        <FormFilledInput fieldMapping={loginFormFields.password} control={control} />
        {isAuthorizing && <LoadingComponent animateOnly={true} />}
        <Button color="secondary" onClick={onSubmitForm} data-cy="cancel-edit-btn">
          Login
        </Button>
        <Button color="secondary" onClick={onSubmitForm} data-cy="cancel-edit-btn">
          Test
        </Button>
        <Button onClick={google} data-cy="save-pokemon-btn">
          Register
        </Button>
      </Styled.BaseForm>
    </div>
  );
};
