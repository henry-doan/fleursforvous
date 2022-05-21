import { MainContainer } from "../../../styles/shared";
import { Container, Col, Row } from "react-bootstrap";

const Services = () => (
  <MainContainer id='Services' color='Grey' size='50vh' smsize='100vh'>
    <Container className="text-center">
      <br />
      <br />
      <br />
      <h1>
        Services
      </h1>
      <br />
      <Row className="justify-content-md-center" style={{ fontSize: '25px' }}>
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
      <Row className="justify-content-md-center" style={{ fontSize: '25px' }}>
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
      <Row className="justify-content-md-center" style={{ fontSize: '25px' }}>
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
  </MainContainer>
)

export default Services;