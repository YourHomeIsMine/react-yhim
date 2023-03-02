import styled from 'styled-components';
import React, { ReactNode } from 'react';
import { colors, font } from 'styles';

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

const Container = styled.div`
  padding: 10px 0px 10px;
  margin-left: 20px;
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  align-items: center;
`;

const Label = styled.label`
  ${font(15, 400)};
  padding: 10px;
`;

const InputForm = styled.input`
  padding: 15px 25px 15px 10px;
  margin-left: 10px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 10px;

  &::placeholder {
    color: ${colors.GRAY};
  }

  :focus {
    outline-color: ${colors.PINK};
  }
`;

export default TextForm;
