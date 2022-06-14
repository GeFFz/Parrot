import React from 'react';
import Login from '../../components/Login';
import Background from '../../components/Background';
import Container from '../../components/Container';

const Contact: React.FC = () => {
  return (
    <Container>
      <Background>
        <Login />
      </Background>
    </Container>

  );
}

export default Contact;