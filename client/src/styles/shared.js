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
  height: ${ props => props.size ? props.size : '100vh' };
  width: 100%;
  background: ${ props => whatColor(props.color) };
  // font-family: "Playfair Display";

  @media (max-width: 1200px) {
    height: ${ props => props.lgsize ? props.lgsize : '105vh' };
  }

  @media (max-width: 1024px) {
    height: ${ props => props.mdsize ? props.mdsize : '110vh' };
  }

  @media (max-width: 768px) {
    height: ${ props => props.smsize ? props.smsize : '120vh' };
  }
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
  border-radius: 8px;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const TextSec = styled.div`
  padding: 60px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 40px;
  }
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

export const MainFooter = styled.footer`
  width: 100%;
  position: relative;
  border-top-width: 1px;
  border-top-style: solid;
  padding-top: 40px;
  padding-bottom: 70px;
  text-align: center;
  color: #211f1f;
`

export const CopyRightSec = styled.div`
  display: block;
  margin: 22px 0 0;
  text-align: center;
  font-size: 12px;
  line-height: 26px;
`