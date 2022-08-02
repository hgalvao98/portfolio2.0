import React, { useEffect, useState } from 'react';
import { PopupContainer } from './styles';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Modal';

export default function Popup() {
  const [openModal, setOpenModal] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  console.log(alert);

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(!alert);
      // console.log('set true');
      setTimeout(() => {
        setAlert(false);
        // console.log('set false');
      }, 2000);
    }, 1000);
    return () => clearTimeout(time);
  }, []);

  return (
    <PopupContainer>
      {alert && (
        <motion.div className="popup__alert">
          Check my CV by clicking this button !
        </motion.div>
      )}

      <motion.div
        className="popup__chat"
        onClick={() => handleOpenModal()}
        whileHover={{ scale: 1.1, cursor: 'pointer' }}
        whileTap={{ scale: 0.9 }}
      >
        CV
      </motion.div>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openModal ? (
          <Modal openModal={openModal} handleCloseModal={handleCloseModal} />
        ) : null}
      </AnimatePresence>
    </PopupContainer>
  );
}
