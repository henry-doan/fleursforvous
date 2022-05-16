import { Form } from 'react-bootstrap';
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
  color: white;

  &:focus {
    outline: none;
    background: transparent;
    background-color: transparent;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: white;
  }

  &::-webkit-calendar-picker-indicator {
    color: white;
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
  color: white;
  width: 100%;
  height: 100px;

  &:focus {
    outline: none;
    background: transparent;
    background-color: transparent;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: white;
  }
`

export const MainSelectLabel = styled(Form.Label)`
  transform: scale(.85) translateY(-0.5rem) translateX(0.15rem);
  margin: 0;
`

export const MainSelectLabelTxt = styled.span`
  opacity: .65;
`
export const MainSelect = styled.select`
  line-height: 1.25;
  height: calc(3.5rem + -10px);
  line-height: 1.25;
  display: block;
  width: 30rem;
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
  color: white !important;
  cursor: pointer;

  &:focus {
    outline: none;
    background: transparent;
    background-color: transparent;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: white !important;
    cursor: pointer;
  }

  // On Mobile view it is indented
`