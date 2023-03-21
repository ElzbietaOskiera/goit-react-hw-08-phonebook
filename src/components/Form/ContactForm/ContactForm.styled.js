import styled from 'styled-components';
import { TextField } from '@mui/material';
import { BsTelephonePlus } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;
  max-width: 250px;
  @media screen and (min-width: 426px) {
    max-width: 450px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  color: rgba(191, 122, 158, 0.8);
   @media screen and (min-width: 426px) {
    font-size: 30px;
  }
`;

export const TextFieldStyled = styled(TextField)`
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid rgba(191, 122, 158, 0.8);
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

export const IconBtn = styled(BsTelephonePlus)`
  margin-left: 10px;
`;
