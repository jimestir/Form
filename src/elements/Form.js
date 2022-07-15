import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#4075ff",
  error: "#f66060",
  successful: "#1ed12d",
};

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
  ${(props) =>
    props.validate === "false" &&
    css`
      color: ${colors.error};
    `}
`;

const GroupInput = styled.div`
  position: relative;
  z-index: 90;
`;
const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colors.border};
    outline: none;
    box-shadow: 5px 5px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.validate === "true" &&
    css`
      border: 3px solid transparent;
    `}

  ${(props) =>
    props.validate === "false" &&
    css`
      border: 3px solid ${colors.error} !important;
    `}
`;

const LegendError = styled.p`
  font-size: 0.7em;
  margin-bottom: 0;
  color: ${colors.error};
  display: none;
  ${(props) =>
    props.validate === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.validate === "false" &&
    css`
      display: block;
    `}
`;

const IconValidate = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;
  ${(props) =>
    props.validate === "false" &&
    css`
      opacity: 1;
      color: ${colors.error};
    `}
  ${(props) =>
    props.validate === "true" &&
    css`
      opacity: 1;
      color: ${colors.successful};
    `}
`;

const ContainTerms = styled.div`
  grid-column: span 2;
  input {
    margin-right: 10px;
  }
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const ContainButtonCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const Button = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;
  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const MessageSuccessful = styled.p`
  font-size: 14px;
  color: ${colors.successful};
  margin-top: 10px;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const MessageError = styled.div`
  height: 45px;
  line-height: 45px;
  background: ${colors.error};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 5px;
  }
`;

export {
  Form,
  Label,
  GroupInput,
  Input,
  LegendError,
  IconValidate,
  ContainTerms,
  ContainButtonCenter,
  Button,
  MessageSuccessful,
  MessageError,
};
