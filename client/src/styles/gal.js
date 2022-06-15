import styled from 'styled-components';

export const GallRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
`

export const GallCol = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 5px;

  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }
  
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`

export const GalPic = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
`

export const GallHeader = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  padding: 32px;
`