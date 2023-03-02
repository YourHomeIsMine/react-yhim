import { TERM_FORM_LIST } from './constant';
import React from 'react';
import styled from 'styled-components';

const TermForm = () => {
  return (
    <TermContainer>
      {TERM_FORM_LIST.map((content, i) => (
        <TermList key={`term-form-${i}`}>
          <label>
            <span>
              <InputBox type="checkbox"></InputBox>
              <span>{content.content}</span>
              <ChoiceContent className={`term-form-${i}`}>
                {content.choice}
              </ChoiceContent>
            </span>
          </label>
        </TermList>
      ))}
    </TermContainer>
  );
};

const TermContainer = styled.ul`
  padding: 20px;
`;

const TermList = styled.li`
  margin-bottom: 10px;
`;

const InputBox = styled.input`
  margin-right: 10px;
`;

const ChoiceContent = styled.b`
  margin-left: 5px;

  &.term-form-0 {
    color: red;
  }
  &.term-form-1 {
    color: red;
  }
`;
export default TermForm;
