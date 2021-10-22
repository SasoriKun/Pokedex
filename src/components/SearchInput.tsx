import { FaSearch } from "react-icons/fa";
import { Wrapper, Input } from "./SearchInput.styles";

export const SearchInput = () => {
  return (
    <Wrapper>
      <FaSearch />
      <Input placeholder="Search a pokemon..." />
    </Wrapper>
  );
};
