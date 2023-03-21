import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px;
  border-bottom: 1px solid white;
  font-size: 1em;
  font-weight: bold;
  @media screen and (min-width: 426px) {
    font-size: 1.5em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
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
