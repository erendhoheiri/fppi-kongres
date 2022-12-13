import React from 'react';
import {
  Container,
  InfoContainer,
  InfoTitle,
  InfoSubTitle,
  InfoText,
  InfoItem,
  Button,
  CardsContainer,
  Card,
  CardIcon,
  CardNumber,
  CardText,
  CardTitle
} from './AboutStyles';

import {
  FaMapMarkerAlt,
  FaRegComments,
  FaCalendarAlt,
  FaUsers
} from 'react-icons/fa';

import { GiPublicSpeaker, GiPartyPopper } from 'react-icons/gi';

const About: React.FC = () => {
  return (
    <Container>
      <InfoContainer>
        <div>
          <InfoTitle>Kongres Nasional</InfoTitle>
        </div>
        <div>
          <InfoText>
            Bertujuan untuk akan melahirkan ide, gagasan dan rekomendasi sebagai
            evaluasi organisasi serta sebagai arah tujuan dalam organisasi serta
            menyusun kembali program kerja yang didasarkan pada gagasan nasional
            demokrasi kerakyatan (NADEMKRA) merupakan langkah-langkah yang
            selama ini dilakukan oleh FPPI.
          </InfoText>
        </div>
        <div>
          <InfoItem>
            <span>
              <FaCalendarAlt />
            </span>
            <span>Tanggal: </span>
            <span>20-22 Januari 2023</span>
          </InfoItem>
          <InfoItem>
            <span>
              <FaMapMarkerAlt />
            </span>
            <span>Lokasi: </span>
            <span>Bumi Perkemahan Cibubur, Jakarta</span>
          </InfoItem>
        </div>
        <Button to='here' smooth={true} duration={500} spy={true}>
          Bergabung
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default About;
