import React from 'react';
import { ProjectsCarousel } from '../../components/ProjectsCarousel';
import { WAIContainer } from './styles';

export default function WID() {
  return (
    <WAIContainer id="what-i-do" className="container-desktop">
      <ProjectsCarousel />
    </WAIContainer>
  );
}
