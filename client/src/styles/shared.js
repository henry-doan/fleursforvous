import { Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const whatColor = (color) => {
  switch(color){
    case 'Black':
      return '#181818';
    case 'Grey':
      return '#F6F6F6';
    case 'Gold':
      return '#D4AF37';
    default:
      return '#FFFFFF';
  }
}

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${ props => whatColor(props.color) };
`

export const NavImg = styled(Image)`
  width: 200px;
  border: none;
  background-color: transparent;
  border-radius: 5px;
  margin: 0 10px;
`

export const MainNav = styled(Navbar)`
  background: #F6F6F6;
`

export const MainNavLink = styled(Link)`
  text-decoration: none;
  color: #565656;
  margin: 0 10px;
`