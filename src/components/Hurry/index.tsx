import {
  Container,
  SubTitle,
  Title,
  Button,
  ButtonContainer,
  CPContainer
} from './HurryStyles';

const Hurry: React.FC = () => {
  return (
    <Container id='here'>
      <SubTitle>
        {' '}
        Terlihat atau tidak terlihat, terdengar atau tidak terdengar
      </SubTitle>

      <Title>
        <h1>GEMURUH ITU HARUS KITA SIAPKAN</h1>
      </Title>
      <ButtonContainer>
        <Button
          onClick={() => {
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSdXJpJ61njSrh19JSScZtjenYagk-DPPaX2mdsxtbPuLoi_kQ/viewform',
              '_blank'
            );
          }}
        >
          Daftar sebagai Volunteer Kongres
        </Button>

        <Button
          onClick={() => {
            window.open('https://kta-kongres-fppi.vercel.app', '_blank');
          }}
        >
          Daftar sebagai Peserta Kongres
        </Button>
      </ButtonContainer>
      <CPContainer>
        Narahubung:
        <span
          onClick={() => {
            window.open('https://wa.link/fhpi4j', '_blank');
          }}
        >
          Risti 0821-1257-2002
        </span>
        <span
          onClick={() => {
            window.open('https://wa.link/6p20uq', '_blank');
          }}
        >
          Yusron 0856-0143-1951
        </span>
      </CPContainer>
    </Container>
  );
};

export default Hurry;
