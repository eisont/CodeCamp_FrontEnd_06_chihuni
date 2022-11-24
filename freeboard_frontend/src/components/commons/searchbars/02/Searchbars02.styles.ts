import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.form`
  width: 776px;
  height: 52px;
  border-radius: 15px;
  padding: 14px 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f2f2f2;
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 17.49px;
  margin: 0 11.51px 0 0;
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

  :placeholder {
    color: #000;
  }
`;
