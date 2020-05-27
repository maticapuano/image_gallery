import React, { useState } from "react";
import { useTransition } from "react-spring";

import { NavContainer, Animated } from "./Elements";
import { SearchBar, MainBar } from "../../../components";

export const NavBar = ({ onSearch }) => {
  const [searchOtp, setSearchOpt] = useState(false);

  const transitions = useTransition(searchOtp, null, {
    from: { opacity: 0, position: "fixed", transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    config: { mass: 1, tension: 200, friction: 22 },
    initial: null,
  });

  return (
    <NavContainer>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <Animated style={props} key={key}>
            <SearchBar
              onSearchClose={() => setSearchOpt((prev) => !prev)}
              onSearch={onSearch}
            />
          </Animated>
        ) : (
          <Animated style={props} key={key}>
            <MainBar onSearchOpt={() => setSearchOpt((prev) => !prev)} />
          </Animated>
        )
      )}
    </NavContainer>
  );
};
