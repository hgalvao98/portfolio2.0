import React, { useState } from 'react';
import Card from '../../components/Card';
import { ExperienceData } from '../../types';
import { data } from '../../utils/experience';
import { CardsContainer, WIVDContainer } from './styles';

export default function WIVD() {
  const info: ExperienceData = data;

  return (
    <WIVDContainer id="what-ive-done" className="container-desktop">
      <h1>Experiences</h1>
      <CardsContainer>
        {info.map((exp) => {
          return (
            <Card
              name={exp.title}
              title={exp.title}
              img={exp.img}
              description={exp.description}
              position={exp.position}
            />
          );
        })}
      </CardsContainer>
    </WIVDContainer>
  );
}
