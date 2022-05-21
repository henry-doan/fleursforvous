import { AuthConsumer } from "../../providers/AuthProvider";
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../images/logoshort.jpg';
import { MainNav, MainNavLink, NavImg } from "../../styles/shared";

const MainNavbar = ({ user, handleLogout }) => {

  const scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
          <li onClick={ () => handleLogout() }>
            Logout
          </li>
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
          {/* <Link to='/login'>
            <li>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              Register
            </li>
          </Link> */}
          <MainNavLink
            activeClass="active"
            to="Gallery"
            spy={true}
            smooth={true}
            duration={500}
            offset={-40}
          >
            Gallery
          </MainNavLink>
          <MainNavLink
            to="Testimonals"
            spy={true}
            smooth={true}
            duration={500}
            offset={-40}
          >
            Testimonals
          </MainNavLink>
          <MainNavLink
            to="Services"
            spy={true}
            smooth={true}
            duration={500}
            offset={-40}
          >
            Services
          </MainNavLink>
          <MainNavLink
            activeClass="active"
            to="Header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <NavImg thumbnail src={Logo} alt='logo' />
          </MainNavLink>
          <MainNavLink
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
          >
            About
          </MainNavLink>
          <MainNavLink
            to="Inquiries"
            spy={true}
            smooth={true}
            duration={500}
            offset={-40}
          >
            Inquiries
          </MainNavLink>
          <MainNavLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </MainNavLink>
        </>
      )
    }
  }
  
  // links that show up regardless of login or out
  return (
    <MainNav collapseOnSelect sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav>
            { rightNavItems() }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </MainNav>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { value => <MainNavbar { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedNavbar;