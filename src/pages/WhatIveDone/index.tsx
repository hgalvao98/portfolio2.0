import { initializeApp } from '@firebase/app';
import {
  collection,
  getFirestore,
  onSnapshot,
  query
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { firebaseConfig } from '../../firestore/firestore';
import { ExperienceData } from '../../types';
import { CardsContainer, WIVDContainer } from './styles';

export default function WIVD() {
  const [info, setInfo] = useState<ExperienceData>();

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const getData = () => {
    const q = query(collection(db, 'experiencias'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const test: any = [];
      querySnapshot.forEach((doc) => {
        test.push(doc.data());
      });
      setInfo(test);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <WIVDContainer id="what-ive-done" className="container-desktop">
      <h1>Experiences</h1>
      <CardsContainer>
        {info?.map((exp, i: number) => {
          return (
            <Card
              order={exp.order}
              key={i}
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
