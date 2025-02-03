import React from "react";
import styled from "styled-components";

const ErrorText = styled.p`
  color: red;
  font-weight: bold;
`;

const ErrorMessage = ({ error }) => {
  return error ? <ErrorText>{error}</ErrorText> : null;
};

export default ErrorMessage;
