import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: rgba(191, 122, 158, 0.8);
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid rgba(191, 122, 158, 0.8);
  border-radius: 5px;
  background-color: #ebf4f8;
  color: rgba(191, 122, 158, 0.8);
  transition: border 250ms linear;
  &:hover,
  &:focus {
    border: 1px solid rgba(191, 122, 158, 0.8);
    outline: rgba(0, 0, 0, 0);
  }
`;
