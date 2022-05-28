import { MainBGContainer } from "../../../styles/shared";
import { Container, Col, Row } from "react-bootstrap";

const Services = () => (
  <MainBGContainer id='Services' color='Black' smsize='900px' xssize='900px' image='https://images.unsplash.com/photo-1523693916903-027d144a2b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'>
    <Container className="text-center" style={{ color: 'white' }}>
      <br />
      <br />
      <br />
      <h1 style={{ fontFamily: "Playfair Display" }}>
        Services
      </h1>
      <br />
      <Row className="justify-content-md-center" style={{ fontSize: '25px', fontFamily: "Playfair Display" }}>
        <Col lg="2">
          Birthdays
        </Col>
        <Col lg="2">
          Graduations
        </Col>
        <Col lg="2">
          Anniversaries
        </Col>
        <Col lg="2">
          Engagements
        </Col>
        <Col lg="2">
          Weddings
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row className="justify-content-md-center" style={{ fontSize: '25px', fontFamily: "Playfair Display" }}>
        <Col lg="2">
          Just Because
        </Col>
        <Col lg="2">
          Dates
        </Col>
        <Col lg="2">
          Holidays
        </Col>
        <Col lg="2">
          Parties
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row className="justify-content-md-center" style={{ fontSize: '25px', fontFamily: "Playfair Display"  }}>
        <Col lg="2">
          Baby Showers
        </Col>
        <Col lg="2">
          Get Well Soon
        </Col>
        <Col lg="2">
          Thank You
        </Col>
        <Col lg="2">
          Housewarming
        </Col>
        <Col lg="2">
          Sympathy
        </Col>
      </Row>
    </Container>
  </MainBGContainer>
)

export default Services;