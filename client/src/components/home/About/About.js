import { Container, Row, Col } from "react-bootstrap";
import { MainContainer, MainProfilePic, TextHeader, TextPara, TextSec, TextSubHeader } from "../../../styles/shared";

const About = () => (
  <MainContainer color='White' id='About'>
    <br />
    <br />
    <br />
    <br />
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <MainProfilePic src='https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' />
        </Col>
        <Col sm={12} md={6}>
          <TextSec>
            <TextHeader>About FLEURS for VOUS</TextHeader>
            <TextSubHeader>Established 2022</TextSubHeader>
          </TextSec>
          <TextPara>
            After watching countless Korean dramas, I became inspired to recreate something so beautiful, and that was making flower arrangements for others. I did not know anyone or anywhere that was able to do that for me living here in Utah. This sparked the idea of incorporating this certain bouquet look into as a small local business. I have always liked helping others, and with the support of my family and friends, this idea became a dream come true. 
          </TextPara>
          <TextPara>
            About the name, it is french for flowers for you, giving a elegant feel to the name and business. 
          </TextPara>
        </Col>
      </Row>
    </Container>
  </MainContainer>
)

export default About;