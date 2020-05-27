import React from "react";
import { Btn } from "./elements";

export const IconButton = ({
  expanded,
  accent,
  children,
  Icon,
  md = true,
  sm,
  onClick,
}) => {
  return (
    <Btn onClick={onClick} expanded={expanded} accent={accent}>
      <Btn.Effect md={md} sm={sm}>
        <Btn.Icon>{Icon}</Btn.Icon>
        <Btn.Text md={md} sm={sm}>
          {children}
        </Btn.Text>
      </Btn.Effect>
    </Btn>
  );
};
