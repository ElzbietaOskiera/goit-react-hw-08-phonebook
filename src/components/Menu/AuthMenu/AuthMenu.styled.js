import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  padding: 10px;
  color: rgba(191, 122, 158, 0.8);
  &.active {
    border-radius: 5px;
    color: #fff;
    background-color: rgba(191, 122, 158, 0.8);
  }
  @media screen and (min-width: 426px) {
    padding: 15px;
  }
`;
