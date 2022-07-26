import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 460px;
    i {
      display: none;
    }
  }
`;

export const HomeContent = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    position: relative;
  }
  //desktop
  @media (min-width: 768px) {
    margin-top: 110px;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
`;

export const Figure = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    right: -100px;
    height: 400px;

    img {
      width: 400px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

export const HomeText = styled.div`
  @media (min-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60%;
    margin-top: -100px;
    h2 {
      font-size: 2.5em;
    }
    span {
      color: #6c63ffb2;
    }
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 2.5em;
    }
  }

  z-index: 6;
`;
