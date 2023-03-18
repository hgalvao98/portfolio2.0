import Logo from '../../assets/imgs/logo-black.png';
import Polygon from '../../assets/imgs/polygon.png';
import { NavbarContainer } from './styles';

export default function Navbar() {
  return (
    <NavbarContainer className="navbar fixed-top">
      <div className="container-fluid">
        <a aria-current="page" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="black"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <img src={Logo} alt="logo" />
            </h5>
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <img className="offcanvas-polygon" src={Polygon} alt="Polygon" />

            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <button
                  className="button-navbar"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a className="nav-link" aria-current="page" href="#home">
                    Home
                  </a>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="button-navbar"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-label="Close"
                    aria-current="page"
                    href="#who-am-i"
                  >
                    Who am I?
                  </a>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="button-navbar"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-label="Close"
                    aria-current="page"
                    href="#what-i-do"
                  >
                    What I do
                  </a>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="button-navbar"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-label="Close"
                    aria-current="page"
                    href="#what-ive-done"
                  >
                    What I've done
                  </a>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="button-navbar"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link"
                    aria-label="Close"
                    aria-current="page"
                    href="#talk-to-me"
                  >
                    Talk to me
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}
