import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 15px;
  @media screen and (min-width: 426px) {
    padding: 32px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 32px;
  color: rgba(191, 122, 158, 0.8);
   @media screen and (min-width: 426px) {
    margin-bottom: 25px;
    font-size: 52px;
  }
`;
export const Caption = styled.h2`
  margin-bottom: 15px;
  font-size: 22px;
  color: rgba(191, 122, 158, 0.8);
   @media screen and (min-width: 426px) {
    margin-bottom: 25px;
    font-size: 30px;
  }
`;
