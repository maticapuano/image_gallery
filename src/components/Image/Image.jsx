import React, { useState } from "react";
import Container from "./elements";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export const Image = ({ src, color = "#bdbdbd" }) => {
  const [loaded, setLoaded] = useState(false);
  //use sping for change display
  return (
    <Container>
      <Container.Img src={src} onLoad={() => setLoaded(true)} />
      {!loaded && (
        <Container.Alt color={color}>
          <Container.Icon icon={faImage} />
        </Container.Alt>
      )}
    </Container>
  );
};
