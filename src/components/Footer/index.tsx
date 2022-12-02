import {
  Container,
  Title,
  SubTitle,
  Copyright,
  SocialList,
  SocialListItem
} from './FooterStyles';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>
          <h1>Kongres Nasional FPPI VII</h1>
        </Title>

        <SubTitle>20 - 22 Jan 2023 / Jakarta, Indonesia</SubTitle>
      </div>
      <SocialList>
        <SocialListItem
          onClick={() => {
            window.open('https://www.facebook.com/fppi.nasional', '_blank');
          }}
        >
          <FaFacebook />
        </SocialListItem>
        <SocialListItem
          onClick={() => {
            window.open('https://twitter.com/PimnasFPPI', '_blank');
          }}
        >
          <FaTwitter />
        </SocialListItem>
        <SocialListItem
          onClick={() => {
            window.open('https://www.instagram.com/fppi.nasional/', '_blank');
          }}
        >
          <FaInstagram />
        </SocialListItem>
      </SocialList>
      <Copyright>© 2022, FPPI Nasional. Lahir untuk Respublica.</Copyright>
    </Container>
  );
};

export default Footer;
