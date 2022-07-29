import styled from 'styled-components';

export const CarouselMain = styled.div`
  p,
  h5 {
    color: black;
  }

  h5 {
    font-size: 60px;
    font-weight: bold;

    span {
      color: #6c63ffb2;
    }
  }

  .carousel-inner,
  img {
    max-width: 900px;
    height: 580px !important;
    object-fit: cover;
    border-radius: 25px;
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
  }

  img {
    opacity: 0.2;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
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

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 100px;
    width: 100px;
    outline: black;
    background-size: 100%, 100%;
    background-image: none;
  }

  @media (min-width: 768px) {
    .carousel-control-next-icon:after {
      content: '>';
      font-size: 55px;
      color: black;
    }

    .carousel-control-prev-icon:after {
      content: '<';
      font-size: 55px;
      color: black;
    }
  }

  @media (min-width: 1200px) {
    .carousel-control-next {
      right: -120px;
    }

    .carousel-control-prev {
      left: -120px;
    }
  }

  @media (max-width: 768px) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      height: 100px;
      width: 100px;
      outline: black;
      background-size: 100%, 100%;
      background-image: none;
    }

    .d-none {
      display: unset !important;
    }

    .carousel-inner,
    .carousel-item,
    img {
      height: 750px !important;
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

      p {
        overflow: scroll;
      }
    }

    .bi {
      height: 40px;
      width: 40px;
    }

    h5 {
      font-size: 30px;
      font-weight: bold;
    }
  }
`;
