import { Container, Image, Info, Title, Text } from './ExtraStyles';

const Extra: React.FC = () => {
  return (
    <Container>
      <Image />
      <Info>
        <Title>
          Tugas pergerakan adalah menyusun penjelasan sistematis tentang
          revolusi sebagai tindakan melangsungkan pembebasan untuk kelas
          tertindas oleh kelas tertindas dan dalam konteks ketertindasan
          masing-masing.
        </Title>
        <Text>
          Front Perjuangan Pemuda Indonesia didirikan sebagai satuan kesadaran
          dan tindakan memilitankan pengorganisiran tak kenal ampun sebagai
          langkah intensif dan efektif menyusun martabat ekonomi politik Rakyat
          Indonesia menuju kehidupan nasional yang demokratis dan berkedaulatan.
        </Text>
        <Text>
          <b>
            MENDIDIK RAKYAT DENGAN PERGERAKAN, MENDIDIK PENGUASA DENGAN
            PERLAWANAN.
          </b>
        </Text>
      </Info>
    </Container>
  );
};

export default Extra;
