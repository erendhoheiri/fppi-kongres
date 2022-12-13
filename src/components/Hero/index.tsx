import React from 'react';
import {
  Container,
  TitleContainer,
  SubTitle,
  Title,
  Location,
  Date,
  Button
} from './HeroStyles';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <Container id='hero'>
      <Date>20 - 22 Januari 2023</Date>
      <TitleContainer>
        <SubTitle>Kongres Nasional VII</SubTitle>
        <Title>Front Perjuangan Pemuda Indonesia</Title>
      </TitleContainer>
      <Location>
        <FaMapMarkerAlt /> Bumi Perkemahan Cibubur, Jakarta
      </Location>
      <Button to='here' smooth={true} duration={500} spy={true}>
        Bergabung <FaCheckCircle />
      </Button>
    </Container>
  );
};

export default Hero;
