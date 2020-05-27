import React from "react";
import { Container } from "./elements";

export const Avatar = ({ src, size = "40px" }) => {
  return <Container src={src} size={size}/>;
};
