import { Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainInput = styled(Form.Control)`
  padding: 8px;
  display: block;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  background-color: transparent;
  border-radius: 0;
  font-size: 20px;

  &:focus {
    outline: none;
    background: transparent;
    background-color: transparent;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`

export const MainTextarea = styled(Form.Control)`
  padding: 8px;
  display: block;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  background-color: transparent;
  border-radius: 0;
  width: 100%;
  height: 100px;
  font-size: 20px;
  resize: none;

  &:focus {
    outline: none;
    background: transparent;
    background-color: transparent;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`

export const MainSelectLabel = styled(Form.Label)`
  transform: scale(.85) translateY(-0.5rem) translateX(0.15rem);
  margin: 0;
  
  @media screen and (max-width: 767px) {
    transform: none;
  }
`

export const MainSelectLabelTxt = styled.span`
  opacity: .65;
`
export const MainSelect = styled.select`
  line-height: 1.25;
  height: calc(3.5rem + -10px);
  line-height: 1.25;
  display: block;
  width: 20rem;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.5;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  background-color: transparent;
  border-radius: 0;
  cursor: pointer;

  &:focus {
    outline: none;
    background: transparent;
    background-color: transparent;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    width: 29rem;
  }
`

export const DocLink = styled.span`
  margin: 0 5px;
  color: ${ props => props.inverted ? '#818181' : 'white' };

  &:hover {
    color: black;
    cursor: pointer;
  }
`

export const SocialLink = styled.a`
  color: white;

  &:hover {
    color: black;
    font-size: 20px;
  }
`

export const ContactStack = styled(Stack)`
  justify-content: center;
`

export const InquiryTitle = styled.h1`
  font-size: 2.5rem;
  font-family: "Playfair Display";
  text-align: center;
`