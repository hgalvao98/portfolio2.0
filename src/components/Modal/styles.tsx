import styled from 'styled-components';

export const ModalContainer = styled.div`
  height: 0;
  position: absolute;
  right: 20px;
  top: 0;
  width: 250px;
  .test {
    color: white;
    h1 {
      font-size: 15px;
    }
    background-color: #6c63ff;
    border: 1px solid black;
    border-radius: 15px;
    position: relative;
    padding: 20px;
  }

  .modal__button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: white;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  a {
    color: white;
  }
  a:hover {
    cursor: pointer;
  }
`;
