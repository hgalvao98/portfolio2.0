import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  img {
    width: 180px;
  }
  width: 100%;
  overflow: hidden;
  max-height: 80px;

  .navbar-toggler {
    font-size: unset;
    border: none;
  }

  .navbar-toggler:focus {
    border: none;
    box-shadow: none;
  }

  .button-navbar {
    outline: none;
    border: none;
    background-color: transparent;
  }

  .offcanvas-body {
    position: relative;
  }

  .offcanvas-polygon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 300px;
  }

  .nav-link {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
