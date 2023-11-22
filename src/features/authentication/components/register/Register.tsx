import { FC, useState } from 'react';
import * as Styled from '../auth.styles';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registerFormFields, useRegisterForm } from './registerForm';
import { FieldValues } from 'react-hook-form';
import { authRoutes } from '@/routes/RouteConstants';
import { FormFilledInput, FormFilledSelect } from '@/libs/forms/formFilledComponents';
import { RegisterUserPayload } from '@/apis/authentication.api';
import { useRegister } from '@/hooks/authentication/useRegister.hook';
import { getStateValueMap } from '@/types/location/States';

const stateOptions = getStateValueMap();

interface RegisterComponentProps {}

export const RegisterComponent: FC<RegisterComponentProps> = ({}) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [formValues, setFormValues] = useState<RegisterUserPayload>(new RegisterUserPayload());

  const { handleSubmit, control, formState } = useRegisterForm({
    username: '',
    password: '',
  });

  const [] = useRegister(formValues);

  const handleValidForm = (formData: FieldValues) => {
    const formInfo = registerFormFields.createEditSaveRequest(formData);
    setFormValues(formInfo);
  };

  const handleInvalidForm = (formData: FieldValues) => {
    console.log('invalid form', formData);
  };

  const onSubmitForm = handleSubmit(handleValidForm, handleInvalidForm);

  const redirectToLogin = () => {
    navigate(authRoutes.login);
  };

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div>
      <Styled.BaseForm onSubmit={onSubmitForm}>
        <Styled.FormTitle>Register</Styled.FormTitle>
        {currentPage === 0 && (
          <>
            <FormFilledInput fieldMapping={registerFormFields.username} control={control} />
            <FormFilledInput fieldMapping={registerFormFields.password} control={control} />
            <FormFilledInput fieldMapping={registerFormFields.confirmPassword} control={control} />
          </>
        )}
        {currentPage === 1 && (
          <>
            <FormFilledInput fieldMapping={registerFormFields.firstName} control={control} />
            <FormFilledInput fieldMapping={registerFormFields.lastName} control={control} />
            <FormFilledInput fieldMapping={registerFormFields.email} control={control} />
          </>
        )}
        {currentPage === 2 && (
          <>
            <FormFilledInput fieldMapping={registerFormFields.phoneNumber} control={control} />
            <FormFilledInput fieldMapping={registerFormFields.streetAddress1} control={control} />
            <FormFilledInput fieldMapping={registerFormFields.streetAddress2} control={control} />
            <FormFilledInput fieldMapping={registerFormFields.city} control={control} />
            <FormFilledSelect options={stateOptions} fieldMapping={registerFormFields.state} control={control} />
            <FormFilledInput fieldMapping={registerFormFields.zipCode} control={control} />
          </>
        )}
        {currentPage === 2 && (
          <Button onClick={onSubmitForm} data-cy="login-btn">
            Register User
          </Button>
        )}
        {currentPage !== 2 && (
          <Button onClick={nextPage} data-cy="login-btn">
            Next
          </Button>
        )}
        {currentPage !== 0 ? (
          <Button color="secondary" onClick={previousPage} data-cy="register-btn">
            Back
          </Button>
        ) : (
          <Button color="secondary" onClick={redirectToLogin} data-cy="register-btn">
            Back To Login
          </Button>
        )}
      </Styled.BaseForm>
    </div>
  );
};
