import React, { useState } from 'react';
import { useEffect } from 'react';
import Data from '../../utils/projectsData.json';
import { ProjectData } from '../../types';
import { ProjectsCarousel } from '../../components/ProjectsCarousel';
import { WAIContainer } from './styles';

export default function WID() {
  const data: ProjectData = Data;
  // console.log(data);

  return (
    <WAIContainer className="container-desktop">
      <ProjectsCarousel />
    </WAIContainer>
  );
}
