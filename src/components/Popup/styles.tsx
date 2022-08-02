import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 0;
  margin-right: 30px;

  .popup__chat {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }

  .popup__alert {
    position: absolute;
    top: -100px;
    width: 200px;
    right: -10px;
    background-color: #de4a4a;
    color: white;
    padding: 20px;
    border-radius: 15px;
  }
`;
