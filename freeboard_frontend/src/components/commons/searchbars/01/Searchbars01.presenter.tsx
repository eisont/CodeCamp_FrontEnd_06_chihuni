import * as S from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <S.Searchbar>
      <S.SearchIcon />
      <S.SearchbarInput
        placeholder="제품을 검색해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </S.Searchbar>
  );
}
