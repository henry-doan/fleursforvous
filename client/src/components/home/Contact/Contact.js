import { CopyRightSec, MainContainer, MainFooter } from "../../../styles/shared";
import { Container, Row, Col } from 'react-bootstrap';
import { Envelope, Instagram, Telephone, Tiktok, Twitter } from 'react-bootstrap-icons';
import { ContactStack, DocLink, SocialLink } from "../../../styles/contact";

const Contact = () =>  (
  <MainContainer color='Black' id='Contact' size='33vh' smsize='20vh' xssize='35vh'>
    <Container className="text-center">
      <MainFooter>
        <br />
        <h3>Contact</h3>
        <br />
        <ContactStack direction="horizontal" gap={3} className='col-md-4 mx-auto'>
          <div>
            <Envelope /> fleursforvous@gmail.com
          </div>
          <div>
            <Telephone /> 385-831-4941
          </div>
        </ContactStack>
        <br />
        <ContactStack direction="horizontal" gap={3} className='col-md-1 mx-auto'>
          <SocialLink href="https://twitter.com/fleursforvous" target='_blank' rel='noreferrer'>
            <Twitter />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/fleursforvous/" target='_blank' rel='noreferrer'>
            <Instagram />
          </SocialLink>
          <SocialLink href="https://www.tiktok.com/@fleursforvous" target='_blank' rel='noreferrer'>
            <Tiktok />
          </SocialLink>
        </ContactStack>
        <CopyRightSec>
          <Row>
            <Col> 
              <DocLink to='/policy'>
                Policy
              </DocLink>
              /
              <DocLink to='/terms'>
                Terms
              </DocLink>
              FLEURS for VOUS © {(new Date().getFullYear())} / All Rights Reserved
            </Col>
          </Row>
        </CopyRightSec>
      </MainFooter>
    </Container>
  </MainContainer>
)

export default Contact;