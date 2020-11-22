import { Link } from "gatsby"
import styled from "styled-components"

export const Section = styled.section`
  display: block;
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  padding: 60px 20px;

  h2 {
    font-size: 60px;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 18px;
  }
`

export const SectionLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: hsl(240, 74%, 31%);
  border-bottom: none;
  border-bottom-style: none;
  border-bottom-color: initial;

  &:hover {
    color: hsl(240, 74%, 31%);
    border-bottom-color: hsl(240, 74%, 31%);
    border-bottom-width: 2px;
  }

  &:before {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    transition: width 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
    position: absolute;
    bottom: -2px;
    width: 0;
    content: "";
  }

  &:hover::before {
    width: 100%;
    transition: width 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:after {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%206a.5.5%200%200%200%200%201V6zM12.854.646a.5.5%200%200%200-.708.708l.708-.708zM18%206.5l.354.354a.5.5%200%200%200%200-.708L18%206.5zm-5.854%205.146a.5.5%200%200%200%20.708.708l-.708-.708zM1%207h16.5V6H1v1zm16.646-.854l-5.5%205.5.708.708%205.5-5.5-.708-.708zm-5.5-4.792l2.75%202.75.708-.708-2.75-2.75-.708.708zm2.75%202.75l2.75%202.75.708-.708-2.75-2.75-.708.708z%22%20fill%3D%22%231264A3%22%2F%3E%3C%2Fsvg%3E);
    content: "";
    width: 19px;
    height: 13px;
    display: inline-block;
    margin-left: 0.5em;
  }
`
