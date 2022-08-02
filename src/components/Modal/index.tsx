import React from 'react';
import { motion } from 'framer-motion';
import { ModalContainer, ModalContent } from './styles';

interface Props {
  openModal: boolean;
  handleCloseModal: any;
}

export default function Modal(props: Props) {
  console.log(props.openModal);

  const closeModal = () => props.handleCloseModal();
  return (
    <ModalContainer>
      <motion.div
        className="test"
        initial={{ opacity: 0, x: 120, y: -50, scale: 0 }}
        animate={{
          opacity: 1,
          x: -10,
          y: -100,
          transition: { duration: 0.8 },
          scale: 1
        }}
        exit={{
          opacity: 0,
          x: 120,
          y: -50,
          transition: { duration: 0.8 },
          scale: 0
        }}
      >
        <button className="modal__button" onClick={() => closeModal()}>
          X
        </button>
        <ModalContent>
          <h1>Would you like to view in:</h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1SbesUFdZN6CAMlKMa2DLnDknuhEgRqWa_UFCAAPfl7w/edit?usp=sharing"
          >
            English
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1YU92w_tYhM1aghS-T4uqfwc8ZvbGQOih6AwG1Ob8Pks/edit?usp=sharing"
          >
            Portugues
          </a>
        </ModalContent>
      </motion.div>
    </ModalContainer>
  );
}
