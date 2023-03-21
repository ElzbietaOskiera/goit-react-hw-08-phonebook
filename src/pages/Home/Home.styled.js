import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
  text-align: center;
  font-size: 15px;
  color: rgba(191, 122, 158, 0.8);
  @media screen and (min-width: 426px) {
    padding: 35px;
    font-size: 20px;
  }
`;

export const Link = styled(NavLink)`
  color: #fff;
`;
