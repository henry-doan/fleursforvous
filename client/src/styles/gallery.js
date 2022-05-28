import styled from 'styled-components';

export const InstagramSection = styled.div`
  position: relative;
  display: flex;
  height: 150vh;
  padding-top: 140px;
  padding-bottom: 140px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    height: 70vw;
  }

  @media screen and (max-width: 991px) {
    height: 700px;
  }

  @media screen and (max-width: 767px) {
    height: auto;
    padding-top: 0px;
    flex-direction: column-reverse;
  }
`

export const IGGridItem = styled.div`
  position: relative;
  overflow: hidden;
  width: 23.2vw;
  margin-top: 10vw;

  @media screen and (max-width: 991px) {
    width: 200px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

export const GallImg = styled.img`
  position: static;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  width: 100%;
  height: auto;
  margin-bottom: 0px;
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  border: 0;
`

export const IGHandlerContainer = styled.div`
  margin-top: 5.4vw;
  margin-right: 30vw;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    margin-top: 5.4vw;
    margin-right: 30vw;
    margin-left: auto;
  }

  @media screen and (max-width: 767px) {
    margin-right: auto;
  }
`

export const IGText = styled.h2`
  font-size: 2.5vw;
  font-weight: 400;
  margin-top: 0px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 5vw;
    font-weight: 400;
    margin-top: 0px;
    text-align: center;
  }
`

export const IGHandler = styled.a`
  font-size: 1.88vw;
  line-height: 1;
  font-style: italic;
  font-weight: 300;
  text-align: right;
  text-align: center;
  text-decoration: none !important;
  color: black !important;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`