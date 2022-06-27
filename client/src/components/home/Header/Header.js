import { HeaderImg, MainContainer } from "../../../styles/shared";
import { Parallax } from "react-parallax";
import Logo from '../../../images/logo.jpg';
import Fade from 'react-reveal/Fade';

const Header = () => (
  <MainContainer id="Header" color='White' size='950px' smsize='100vh' xssize='970px'>
    <Parallax 
      bgImage='https://images.unsplash.com/photo-1561848355-890d054dc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
      bgImageAlt="bg" 
      strength={500}
    >
      <div style={{ height: '100vh', textAlign: 'center' }}>
        <Fade top>
          <HeaderImg src={Logo} alt='logo' />
        </Fade>
      </div>
    </Parallax>
  </MainContainer>
)

export default Header;