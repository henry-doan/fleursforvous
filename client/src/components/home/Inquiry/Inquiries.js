import { useState } from 'react';
import { CopyRightSec, MainBtn, MainBtnContainer, MainContainer } from "../../../styles/shared";
import { Container, Form, FloatingLabel, Row, Col, Modal } from 'react-bootstrap';
import { MainInput, MainSelect, MainSelectLabel, MainTextarea, MainSelectLabelTxt, InquiryTitle, DocLink } from '../../../styles/contact';
import { SubmissionConsumer } from '../../../providers/SubmissionProvider';
import Policy from '../../policies/Policy';
import Terms from '../../policies/Terms';
import { Fade } from 'react-awesome-reveal';

const Inquiries = ({ addSubmission }) => {
  const [contact, setContact] = useState({ fullName: '', occasion: '', phone: '', email: '', dateNeeded: '', timeNeeded: '', colors: '', specialRequirements: '', priceRange: 'Small - $20', flowers: '', complete: false })
  const [policyModalOpen, setPolicyModalOpen] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    addSubmission(contact)
    setContact({ fullName: '', occasion: '', phone: '', email: '', dateNeeded: '', timeNeeded: '', colors: '', specialRequirements: '', priceRange: 'Small - $20', flowers: '', complete: false  })
  }

  return (
    <MainContainer color='Grey' id='Inquiries' size='950px' mdsize='950px' lgsize='950px' smsize='1400px' xssize='1400px'>
      <Container style={{ color: 'black', fontFamily: "Playfair Display", paddingTop: '100px' }}>
        <Fade>
          <InquiryTitle>Inquiries</InquiryTitle>
          <p style={{ fontSize: '1.50rem', fontFamily: "Playfair Display", textAlign: 'center' }}>
            Alicia would love to work with you! Please fill out all of the required information down below. <br /> You should receive a response back within 24 hours.
          </p>
        </Fade>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            label="Full Name"
            className="mb-3"
          >
            <MainInput
              type="text" 
              name='fullName'
              value={contact.fullName}
              onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
              placeholder="Full Name" 
              required
            />
          </FloatingLabel>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                label="Email"
                className="mb-3"
              >
                <MainInput
                  type="email" 
                  name='email'
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="Email" 
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                label="Phone"
                className="mb-3"
              >
                <MainInput
                  type="text" 
                  name='phone'
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  placeholder="Phone" 
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel
            label="What's The Occasion?"
            className="mb-3"
          >
            <MainInput
              type="text" 
              name='occasion'
              value={contact.occasion}
              onChange={(e) => setContact({ ...contact, occasion: e.target.value })}
              placeholder="What's The Occasion?"
              required 
            />
          </FloatingLabel>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                label="Date Needed By"
                className="mb-3"
              >
                <MainInput 
                  type='date'
                  name='dateNeeded'
                  value={contact.dateNeeded}
                  onChange={(e) => setContact({ ...contact, dateNeeded: e.target.value })}
                  required 
                  placeholder="Date Needed By:" 
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                label="Time Needed By"
                className="mb-3"
              >
                <MainInput
                  type='time'
                  name='timeNeeded'
                  value={contact.timeNeeded}
                  onChange={(e) => setContact({ ...contact, timeNeeded: e.target.value })}
                  required 
                  placeholder="Time Needed By:" 
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                label="Flowers Colors"
                className="mb-3"
              >
                <MainInput 
                  name='colors'
                  value={contact.colors}
                  onChange={(e) => setContact({ ...contact, colors: e.target.value })}
                  placeholder="Flowers Colors"
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <MainSelectLabel>
                <MainSelectLabelTxt>Bouquet Size</MainSelectLabelTxt>
                <MainSelect
                  name='priceRange'
                  value={contact.priceRange}
                  onChange={(e) => setContact({ ...contact, priceRange: e.target.value })}
                  placeholder="Bouquet Size"
                  >
                  <option value="small">Small - $30 - $40</option>
                  <option value="medium">Medium - $50 - $60</option>
                  <option value="large">Large - $70 - $80</option>
                  <option value="xlarge">XLarge - $90 - $100</option>
                  <option value="custom">Custom - MP</option>
                </MainSelect>
              </MainSelectLabel>
            </Col>
            <Col md>
              <FloatingLabel
                label="Flower Types"
                className="mb-3"
              >
                <MainInput
                  name='flowers'
                  value={contact.flowers}
                  onChange={(e) => setContact({ ...contact, flowers: e.target.value })}
                  placeholder="Flower Types:" 
                />
              </FloatingLabel>
            </Col>
          </Row>
          <MainTextarea
            as="textarea"
            placeholder="Any Special Requirements"
            name='specialRequirements'
            value={contact.specialRequirements}
            onChange={(e) => setContact({ ...contact, specialRequirements: e.target.value })}
          />
          <p>
          </p>
          <CopyRightSec>
            *By Clicking "Submit", you agree to FLEURS for VOUS's 
            <DocLink onClick={() => setTermsModalOpen(true)} inverted>
              Terms of Service
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
                <Terms />
              </Modal.Body>
            </Modal>
            and acknowledge you have read the 
            <DocLink onClick={() => setPolicyModalOpen(true)} inverted>
              Private Policy.
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
            You also consent to receive calls, emails, or SMS messages you provided to finish up the order process and give you next steps for payment.
          </CopyRightSec>
          <MainBtnContainer>
            <MainBtn className='text-center' type="submit">
              Submit
            </MainBtn>
          </MainBtnContainer>
        </Form>
      </Container>
    </MainContainer>
  )
}

const ConnectedInquiries = (props) => (
  <SubmissionConsumer>
    { value => <Inquiries {...props} {...value} />}
  </SubmissionConsumer>
)

export default ConnectedInquiries;