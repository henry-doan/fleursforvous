import { useState } from 'react';
import { CopyRightSec, MainContainer, MainFooter } from "../../../styles/shared";
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Envelope, Instagram, Telephone, Tiktok, Twitter } from 'react-bootstrap-icons';
import { ContactStack, DocLink, SocialLink } from "../../../styles/contact";
import Policy from '../../policies/Policy';

const Contact = () => {
  const [policyModalOpen, setPolicyModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)

  return (
    <MainContainer color='Black' id='Contact' size='345px' smsize='360px' xssize='350px'>
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
                <DocLink onClick={() => setPolicyModalOpen(true)}>
                  Policy
                </DocLink>
                <Modal 
                  show={policyModalOpen} 
                  onHide={() => setPolicyModalOpen(false)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    Private Policy
                  </Modal.Header>
                  <Modal.Body>
                    <Policy />
                  </Modal.Body>
                </Modal>
                /
                <DocLink onClick={() => setTermsModalOpen(true)}>
                  Terms
                </DocLink>
                <Modal 
                  show={termsModalOpen} 
                  onHide={() => setTermsModalOpen(false)}
                  size="lg"
                  centered
                >
                  <Modal.Header closeButton>
                    Terms of Service 
                  </Modal.Header>
                  <Modal.Body>
                    TBA
                  </Modal.Body>
                </Modal>
                FLEURS for VOUS © {(new Date().getFullYear())} / All Rights Reserved
              </Col>
            </Row>
          </CopyRightSec>
        </MainFooter>
      </Container>
    </MainContainer>
  )
}

export default Contact;