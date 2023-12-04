import React from 'react';
import { IMaskInput } from 'react-imask';
import { MaskedPattern } from 'imask';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: any;
  definitions: MaskedPattern;
  overwrite: boolean;
  multiline?: boolean;
  rows?: number;
}

const CustomMask = React.forwardRef<HTMLElement, CustomProps>((props, ref) => {
  const { onChange, overwrite = false, multiline, rows, ...other } = props;
  const typedRef = ref as React.MutableRefObject<HTMLInputElement>;

  const onAccept = (value: any) => {
    onChange({ target: { name: props.name, value } });
  };

  if (multiline) {
    return <textarea {...other} />;
  }

  return <IMaskInput {...other} inputRef={typedRef} onAccept={onAccept} unmask overwrite={overwrite} radix="." />;
});

export default CustomMask;
