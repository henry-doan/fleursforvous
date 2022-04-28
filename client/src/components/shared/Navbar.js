import { AuthConsumer } from "../../providers/AuthProvider";
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({user, handleLogout }) => {
  
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
          <Link
            activeClass="active"
            to="Header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="Gallery"
            spy={true}
            smooth={true}
            duration={500}
          >
            Gallery
          </Link>
          <Link
            to="Testimonals"
            spy={true}
            smooth={true}
            duration={500}
          >
            Testimonals
          </Link>
          <Link
            to="Service"
            spy={true}
            smooth={true}
            duration={500}
          >
            Service
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </>
      )
    }
  }
  
  // links that show up regardless of login or out
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>
              Home
            </li>
          </Link>
            { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { value => <Navbar { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedNavbar;