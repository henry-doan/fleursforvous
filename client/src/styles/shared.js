import styled from 'styled-components';

const whatColor = (color) => {
  switch(color){
    case 'Black':
      return '#181818';
    case 'Grey':
      return '#D9D7D5';
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