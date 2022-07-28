import React from 'react';
import { HomeContainer, Figure, HomeText, HomeContent } from './styles';
import FigureImg from '../../assets/imgs/mobile-figure.png';
import { useEffect } from 'react';

export default function Home() {
  //come back to this, as it is only a temporary solution
  const checkWidth = () => {
    let width = window.screen.width;
    console.log(width);

    return width;
  };

  console.log(checkWidth());

  useEffect(() => {
    checkWidth();
  }, [window.screen.width]);
  //
  return (
    <HomeContainer id="home">
      <HomeContent>
        <HomeText
          className={
            checkWidth() > 768 ? 'container-desktop' : 'container-mobile'
          }
        >
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
