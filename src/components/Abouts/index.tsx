import {
  Container,
  Image,
  Info,
  InfoText,
  InfoItem,
  Button,
  InfoTitle
} from './Abouts';

import {
  FaMapMarkerAlt,
  // FaRegComments,
  FaCalendarAlt
  // FaUsers
} from 'react-icons/fa';

const Abouts: React.FC = () => {
  return (
    <Container id='about'>
      <Info>
        <div>
          <InfoTitle>Kongres Nasional</InfoTitle>
        </div>
        <div>
          <InfoText>
            Bertujuan untuk melahirkan ide, gagasan dan rekomendasi sebagai
            evaluasi organisasi sebagai arah tujuan dalam organisasi kedepan
            serta menyusun kembali program kerja yang didasarkan pada gagasan
            nasional demokrasi kerakyatan (NADEMKRA) merupakan langkah-langkah
            yang selama ini dilakukan oleh FPPI di berbagai masing-masing
            sektoral.
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
            <span>Jakarta, Indonesia</span>
          </InfoItem>
        </div>
        <Button to='here' smooth={true} duration={500} spy={true}>
          Bergabung
        </Button>
      </Info>
      <Image />
    </Container>
  );
};

export default Abouts;
