import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 767px) {
    margin-top: 560px;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const WAITitle = styled.div`
  h1 {
    font-size: 80px;
    font-weight: 700;
  }
  margin-bottom: 100px;

  @media (max-width: 767px) {
    h1 {
      font-size: 60px;
    }
  }
`;

export const WAIText = styled.div`
  p {
    font-size: 28px;
  }

  span {
    color: #6c63ffb2;
  }
  margin-bottom: 60px;

  @media (min-width: 768px) {
    text-align: center;
  }
  .wai {
    max-width: 90%;
  }
`;
