import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #fff;
  @media screen and (min-width: 426px) {
    gap: 35px;
  }
`;

export const LinkNav = styled(NavLink)`
  padding: 10px;
  color: rgba(191, 122, 158, 0.8);
  &.active {
    border-radius: 5px;
    color: rgb(235, 244, 248);
    background-color: rgba(191, 122, 158, 0.8);
  }
  @media screen and (min-width: 426px) {
    padding: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100px;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #ebf4f8;
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
  @media screen and (min-width: 426px) {
    width: 150px;
    padding: 10px;
  }
`;
