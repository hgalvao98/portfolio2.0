import React from 'react';
import { HomeContainer, Figure, HomeText, HomeContent } from './styles';
import FigureImg from '../../assets/imgs/mobile-figure.png';

export default function Home() {
  return (
    <HomeContainer id="home">
      <HomeContent>
        <HomeText className="container-mobile">
          <h2>
            Hello, my name is <span>Henrique Galvão</span> and I am a FullStack
            Developer
          </h2>
        </HomeText>
        <Figure>
          <img src={FigureImg} alt="profile" />
        </Figure>
      </HomeContent>
      <a href="#who-am-i">
        <i className="fa fa-arrow-down"></i>
      </a>
    </HomeContainer>
  );
}
