import { HeaderImg, MainContainer } from "../../../styles/shared";
import { Parallax } from "react-parallax";
import Logo from '../../../images/logo.jpg';

const Header = () => (
  <MainContainer id="Header" color='Grey' smsize='100vh' xssize='60vh'>
    {/* Fleurs For Vous */}
    <Parallax 
      // bgImage='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' 
      bgImageAlt="bg" 
      strength={500}
    >
      <div style={{ height: '100vh', textAlign: 'center' }}>
        <HeaderImg src={Logo} alt='logo' />
      </div>
    </Parallax>
  </MainContainer>
)

export default Header;