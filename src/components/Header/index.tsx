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
          <a href="#what-i-do">What I do</a>
        </li>
        <li>
          <a href="#what-ive-done">What I've done</a>
        </li>
        <li>
          <a href="#talk-to-me">Talk to me</a>
        </li>
      </LinksList>
    </HeaderContainer>
  );
}
