import styled from 'styled-components';

export const CarouselMain = styled.div`
  p,
  h5 {
    color: black;
  }

  h5 {
    font-size: 60px;
    font-weight: bold;
  }

  .carousel-inner,
  img {
    max-width: 900px;
    height: 580px !important;
    object-fit: cover;
    border-radius: 25px;
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  img {
    opacity: 0.2;
  }

  .carousel-caption {
    top: 40%;
    transform: translateY(-50%);
    left: 0;
    right: 0;

    &-text {
      width: 70%;
      margin: 0 auto;
    }
  }

  .carousel-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 70px;
    margin: 30px 0;
  }

  @media (max-width: 768px) {
    .d-none {
      display: unset !important;
    }

    .carousel-caption {
      top: 35%;
      transform: translateY(-50%);
      left: 0;
      right: 0;

      &-text {
        width: 70%;
        margin: 0 auto;
      }
    }
  }
`;
