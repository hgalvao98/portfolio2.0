import styled from 'styled-components';

export const WIVDContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  scroll-margin-top: 6em;

  h1 {
    font-weight: 700;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 40%);
  gap: 30px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  padding-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
    align-items: unset;
    justify-content: unset;
  }
`;
