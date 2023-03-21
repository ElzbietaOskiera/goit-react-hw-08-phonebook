import styled from 'styled-components';
import { TextField } from '@mui/material';
import { FaUserPlus } from 'react-icons/fa';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const Icon = styled(FaUserPlus)`
  width: 85px;
  height: 85px;
  color: #fff;
`;

export const Title = styled.h2`
  color: rgba(191, 122, 158, 0.8);
`;

export const TextFieldStyled = styled(TextField)`
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #ebf4f8;
  color: rgba(191, 122, 158, 0.8);
  transition: border 250ms linear;
  &:hover,
  &:focus {
    border: 1px solid #fff;
    outline: rgba(0, 0, 0, 0);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #487996;
  border-radius: 5px;
  background-color: #ebf4f8;
  color: rgba(191, 122, 158, 0.8);
  transition: all 250ms linear;
  &:hover,
  &:focus {
    border: 1px solid rgba(191, 122, 158, 0.8);
    color: #ebf4f8;
    background-color: rgba(191, 122, 158, 0.8);
  }
`;
