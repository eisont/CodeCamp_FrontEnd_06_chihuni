import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 1000px;
  height: 52px;
  border-radius: 15px;
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #000;
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 25px;

  :hover {
    cursor: pointer;
    color: red;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0 0 0 20px;
`;
