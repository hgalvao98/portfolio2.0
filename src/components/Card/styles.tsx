import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    p {
      font-size: 0.8em;
    }
  }

  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 300px;
    perspective: 1000px;

    @media (max-width: 500px) {
      height: 400px;
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 2s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
    cursor: pointer;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 25px;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      width: 40%;
    }
  }

  .flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    padding: 5%;
  }
`;
