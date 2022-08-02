import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 6em;
`;

export const WAITitle = styled.div`
  h1 {
    font-size: 80px;
    font-weight: 700;
  }
  margin-bottom: 60px;

  @media (max-width: 767px) {
    h1 {
      font-size: 50px;
    }
  }
`;

export const WAIText = styled.div`
  text-align: center;
  p {
    font-size: 28px;
    font-weight: 600;
    position: relative;
  }

  .caption {
    opacity: 0;
    transition: 1s ease-in;
  }

  p:hover,
  .caption:hover {
    color: #6c63ffb2;
    cursor: pointer;
    opacity: 1;
  }

  span {
    color: #6c63ffb2;

    &:hover {
      color: black;
      font-weight: 700;
    }
  }
  margin-bottom: 60px;
  .wai {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    text-align: center;
    p {
      display: none;
    }
  }

  @media (max-width: 767px) {
    img {
      display: none;
    }
  }
`;
