import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: white;
  z-index: 100;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }

  ul {
    padding: unset;
  }
`;

export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  img {
    vertical-align: unset !important;
    width: 80%;

    @media (min-width: 1200px) {
      width: 70%;
    }
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 60%;
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;

    &:hover {
      color: #6c63ffb2;
    }
  }

  font-size: 18px;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
