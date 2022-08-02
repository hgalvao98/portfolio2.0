import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10%;
  background-color: #6c63ffb2;
  border-top: 1px solid black;
  img {
    width: 250px;
  }

  @media (max-width: 500px) {
    img {
      display: none;
    }

    text-align: center;
    padding-top: 20px;
  }
`;

export const ContactMessage = styled.div``;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  a {
    color: black;
  }
  align-items: center;
  margin: 0 auto;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
