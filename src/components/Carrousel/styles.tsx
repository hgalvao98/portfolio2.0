import styled from 'styled-components';

export const CarouselContainer = styled.div`
  .react-multi-carousel-item {
    transform-style: preserve-3d;
    backface-visibility: hidden;
    width: unset !important;
    margin: 0 20px;

    @media (min-width: 768px) {
      margin: 0 100px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
      margin: 0 50px;
    }
  }

  h1 {
    font-weight: 700;
  }
`;
