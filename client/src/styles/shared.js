import { Button, Image, Navbar } from 'react-bootstrap';
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

export const MainBtn = styled(Button)`
  color: white !important;
  border: 1px solid white;
  margin-top: 3rem;
  border-radius: 0;
  background: transparent;
  width: 7rem;

  &:hover {
    background: white;
    color: #181818 !important;
  }
`

export const MainBtnContainer = styled.div`
  display: flex; 
  justify-content: center;
`

export const MainProfilePic = styled(Image)`
  width: 100%;
  height: auto;
  opacity: 0.75;
  border-radius: 4px;
`

export const TextSec = styled.div`
  padding: 40px;
`

export const TextHeader = styled.h1`
  text-align: center;
  font-family: "Playfair Display";
  letter-spacing: 5px;
  font-weight: 400;
  margin: 10px 0;
  font-size: 32px;
`

export const TextSubHeader = styled.h5`
  text-align: center;
  font-family: "Playfair Display";
  letter-spacing: 5px;
  font-weight: 500;
  margin: 10px 0;
  font-size: 20px;
`

export const TextPara = styled.p`
  font-size: 18px;
  font-family: "Playfair Display";
  opacity: 0.75;
  padding: 0 60px;
`