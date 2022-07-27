import React from 'react';
import Logo from '../../assets/imgs/Logo-Black.png';
import { HeaderContainer, LinksList, LogoContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <a href="#home">
          <img src={Logo} alt="logo" />
        </a>
      </LogoContainer>
      <LinksList>
        <li>
          <a href="#who-am-i">Who am I?</a>
        </li>
        <li>
          <a href="/who-am-i">What I do</a>
        </li>
        <li>
          <a href="/who-am-i">What I've done</a>
        </li>
        <li>
          <a href="/who-am-i">Talk to me</a>
        </li>
      </LinksList>
    </HeaderContainer>
  );
}
