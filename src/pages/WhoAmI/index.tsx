import React from 'react';
import { Container, WAITitle, WAIText } from './styles';
import henrique from '../../assets/imgs/henrique.png';

export default function WAI() {
  return (
    <Container className="container-desktop" id="who-am-i">
      <WAITitle>
        <h1>Henrique is</h1>
      </WAITitle>
      <WAIText>
        {/* <p>In love with CSS</p>
        <p>Usually working with ReactJs</p>
        <p>A big fan of JavaScript</p>
        <p>Fluent in Enflish and Portuguese</p>
        <p>
          <span>Always looking for new opportunities and experiences</span>
        </p>
        <p>Born in Vinhedo - SP</p>
        <p> Working as Front-End Developer</p>
        <p>An University of Arizona Alumni</p>
        <p>Always learning</p>
        <p>An adventure seeker</p>
        <p>A marketing graduate</p> */}
        <img className="wai" src={henrique} alt="who am i" />
      </WAIText>
    </Container>
  );
}
