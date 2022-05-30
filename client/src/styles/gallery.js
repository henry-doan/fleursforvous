import { Instagram } from 'react-bootstrap-icons';
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
  margin-right: 25vw;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    margin-top: 5.4vw;
    margin-right: 25vw;
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
  text-align: center;
  text-decoration: none !important;
  color: black !important;

  &:hover {
    font-size: 2vw;
    border-bottom: 1px solid black;
  }

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`

export const IGHandlerIcon = styled.a`
  line-height: 1;
  font-weight: 300;
  text-decoration: none !important;
  color: black !important;

  &:hover {
    font-size: 2.75vw;
  }
`

export const GallItemSixth = styled(IGGridItem)`
  position: absolute;
  left: 10vw;
  width: 29.6vw;
  margin-top: 2.7vw;

  @media screen and (max-width: 991px) {
    width: 230px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const GallItemFirst = styled(IGGridItem)`
  position: absolute;
  top: auto;
  right: 8.7vw;
  width: 34vw;
  margin-top: 1.3vw;

  @media screen and (max-width: 991px) {
    width: 250px;
  }

  @media screen and (max-width: 767px) {
    // position: static;
    // top: 22px;
    display: none;
  }
`

export const GallItemSecond = styled(IGGridItem)`
  position: absolute;
  top: auto;
  right: 5vw;
  width: 11.3vw;
  margin-top: 8vw;

  @media screen and (max-width: 991px) {
    width: 100px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const GallItemThird = styled(IGGridItem)`
  position: absolute;
  top: auto;
  right: 5vw;
  width: 15.7vw;
  margin-top: 33vw;

  @media screen and (max-width: 991px) {
    width: 120px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const GallItemFifth = styled(IGGridItem)`
  position: absolute;
  left: 3.4vw;
  top: auto;
  width: 12.5vw;
  margin-top: 26vw;

  @media screen and (max-width: 991px) {
    width: 105px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const GallItemSeventh = styled(IGGridItem)`
  position: absolute;
  left: 5vw;
  width: 7.5vw;
  margin-top: 11vw;

  @media screen and (max-width: 991px) {
    width: 70px;
  }

  @media screen and (max-width: 767px) {
    position: static;
    width: 80%;
    margin-top: 40px;
  }
`

export const GallItemFourth = styled(IGGridItem)`
  position: absolute;
  left: 22.6vw;
  top: auto;
  right: auto;
  width: 18.5vw;
  margin-top: 32vw;

  @media screen and (max-width: 991px) {
    width: 150px;
  }

  @media screen and (max-width: 767px) {
    position: static;
    width: 80%;
    margin-top: 20px;
  }
`