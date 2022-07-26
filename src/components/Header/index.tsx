import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/Logo-Black.png';
import { HeaderContainer, LinksList, LogoContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </LogoContainer>
      <LinksList>
        <li>
          <Link to="/who-am-i">Who am I?</Link>
        </li>
        <li>
          <Link to="/who-am-i">What I do</Link>
        </li>
        <li>
          <Link to="/who-am-i">What I've done</Link>
        </li>
        <li>
          <Link to="/who-am-i">Talk to me</Link>
        </li>
      </LinksList>
    </HeaderContainer>
  );
}
