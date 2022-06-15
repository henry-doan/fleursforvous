import { Container, Row, Col } from "react-bootstrap";
import { MainContainer, MainProfilePic, TextHeader, TextPara, TextSec } from "../../../styles/shared";
import Profile from '../../../images/Profile.jpg';

const About = () => (
  <MainContainer color='White' id='About' size='1200px' lgsize='1600px' mdsize='2150px' smsize='2100px' xssize='2100px'>
    <br />
    <br />
    <br />
    <br />
    <Container>
      <Row>
        <Col lg={12} xl={6} style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
          <MainProfilePic src={Profile} alt='profile' />
        </Col>
        <Col lg={12} xl={6}>
          <TextSec>
            <TextHeader>About</TextHeader>
          </TextSec>
          <TextPara>
            FLEURS for VOUS, or Flowers For You By Alicia, is a floral design business serving Weber County to Utah County, Utah. It is a French-English name combined together as one. Alicia wanted a name that had romance, love, and beauty, therefore, the French language and the enticing views of Paris, France, also known as one of the most romantic countries in the world, have made this all endlessly possible. 
          </TextPara>
          <TextPara>
            After watching countless Korean dramas and strolling along the path of flowers at the Pike Place Market in Seattle, Washington, Alicia became even more inspired to recreate something so beautiful, and that was making floral arrangements for others. She did not know anyone or anywhere that was able to do that for her while living here in Utah. This sparked the idea of incorporating these certain floral bouquets looks into as a small local business. Alicia has always liked helping others, and with the support of her family and friends, this idea became a dream come true.  
          </TextPara>
          <TextPara>
            According to Alicia, there is something truly unique, special, and fulfilling working with flowers. She realizes this is not considered just another hobby to pass the time, but actually, it is her long-awaited passion that she has been yearning for. 
          </TextPara>
        </Col>
      </Row>
    </Container>
  </MainContainer>
)

export default About;