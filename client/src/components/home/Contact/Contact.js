import { useState } from 'react';
import { MainBtn, MainBtnContainer, MainContainer } from "../../../styles/shared";
import { Container, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { MainInput, MainSelect, MainSelectLabel, MainTextarea, MainSelectLabelTxt } from '../../../styles/contact';

const Contact = () => {
  const [contact, setContact] = useState({ fullName: '', occasion: '', phone: '', email: '', dateNeeded: '', timeNeeded: '', colors: '', specialRequirements: '', priceRange: '', flowers: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // todo save to db and send somewhere
    setContact({ fullName: '', occasion: '', phone: '', email: '', dateNeeded: '', timeNeeded: '', colors: '', specialRequirements: '', priceRange: '', flowers: '' })
  }

  return (
    <MainContainer color='Black' id='Contact'>
      <Container style={{ color: 'white'}}>
        <h1>Inquiries</h1>
        <p>We offer full-service bouquets for any event, large, medium or small or custom. We understand your needs and we will cater the flowers to satisfy the biggest criteria of them all.</p>
        <p>Serving between Ogden to Lehi</p>
        <p>You can also contact us by phone 385-831-4941 or email fleursforvous@gmail.com, or you can send us a message here:</p>
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
                label="Date Needed By:"
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
                label="Time Needed By:"
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
                  <MainSelectLabelTxt>Bouquet Size:</MainSelectLabelTxt>
                <MainSelect
                  name='priceRange'
                  value={contact.priceRange}
                  onChange={(e) => setContact({ ...contact, priceRange: e.target.value })}
                  placeholder="Bouquet Size:"
                  >
                  <option value="small">Small - $20</option>
                  <option value="medium">Medium - $40</option>
                  <option value="large">Large - $80</option>
                  <option value="x large">X Large - $120</option>
                  <option value="custom">Custom - MP</option>
                </MainSelect>
              </MainSelectLabel>
            </Col>
            <Col md>
              <FloatingLabel
                label="Flower Types:"
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

export default Contact;