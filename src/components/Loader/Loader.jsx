import React from "react";
import { Container } from "./elements";
export const Loader = ({ text }) => {
  return (
    <Container>
      <Container.Loader />
      <Container.Text>{text}</Container.Text>
    </Container>
  );
};
