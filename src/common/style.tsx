import { Box, FormControl, styled } from '@mui/material';
import { default as MuiEditIcon } from '@mui/icons-material/Edit';
import { default as MuiAddIcon } from '@mui/icons-material/AddCircle';
import { default as MuiCancelIcon } from '@mui/icons-material/Cancel';

export const Link = styled('a')(({}) => ({
  cursor: 'pointer',
}));

export const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const EditIcon = styled(MuiEditIcon)(({}) => ({
  cursor: 'pointer',
}));

export const AddIcon = styled(MuiAddIcon)(({}) => ({
  cursor: 'pointer',
}));

export const CancelIcon = styled(MuiCancelIcon)(({}) => ({
  cursor: 'pointer',
}));

export const BaseForm = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const FormHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const FormTitle = styled('h2')(({ theme }) => ({
  margin: 0,
}));
