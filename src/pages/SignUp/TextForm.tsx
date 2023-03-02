import styled from 'styled-components';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  label: string;
  type: string;
  placeholder: string;
  className: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextForm: React.FC<Props> = ({
  children,
  label,
  type,
  placeholder,
  className,
  name,
  onChange,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputForm
        type={type}
        placeholder={placeholder}
        className={className}
        name={name}
        onChange={onChange}
      />
      {children}
    </Container>
  );
};

const Container = styled.div``;
const Label = styled.label``;
const InputForm = styled.input``;

export default TextForm;
