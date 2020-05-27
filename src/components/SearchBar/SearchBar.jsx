import React, { useEffect, useRef } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./elements";
import { debounce } from "../../utils";

export const SearchBar = ({ onSearchClose, onSearch }) => {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const callSearch = debounce((query) => {
    if (query === "") onSearch(null);
    onSearch(query);
  }, 500);
  const onChange = (e) => {
    callSearch(e.target.value);
  };

  return (
    <Container>
      <Container.Input
        ref={inputEl}
        type="text"
        onChange={onChange}
        placeholder="Search"
      />
      <Container.Opt onClick={onSearchClose}>
        <Container.Icon icon={faTimes} />
      </Container.Opt>
    </Container>
  );
};
