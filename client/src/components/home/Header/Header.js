import { MainContainer } from "../../../styles/shared";
import { Parallax } from "react-parallax";
import Logo from '../../../images/logo.jpg';

const Header = () => (
  <MainContainer id="Header" color='Grey'>
    {/* Fleurs For Vous */}
    <Parallax bgImage='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' bgStyle={{ backgroundColor: '#F6F6F6' }}  bgImageAlt="bg" strength={500}>
      <div style={{ height: '100vh', textAlign: 'center' }}>
        <img src={Logo} alt='logo' style={{ margin: '0 auto', width: 800 }} />
      </div>
    </Parallax>
    <Parallax blur={10} bgImage="path/to/image.jpg" strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
  </MainContainer>
)

export default Header;