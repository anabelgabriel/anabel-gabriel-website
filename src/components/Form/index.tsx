import * as React from 'react';

export interface FormProps {
  children?: React.ReactNode;
  onSubmit?: React.EventHandler<React.FormEvent<any>>;
}

const Form: React.SFC<FormProps> = ({ children, onSubmit }: FormProps): React.ReactElement<FormProps> => (
  <form onSubmit={(e: React.FormEvent<any>) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  }} noValidate={true} acceptCharset="UTF-8" autoComplete="yes" method="POST" action=".">
    {children}
  </form>
);

export default Form;
export { default as FormActions } from './Actions';
export { default as FormProgress, ProgressStep as FormProgressStep } from './Progress';
