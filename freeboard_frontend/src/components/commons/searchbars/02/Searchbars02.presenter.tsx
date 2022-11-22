import * as S from "./Searchbars02.styles";
import { ISearchbars02UIProps } from "./Searchbars02.types";

const Searchbars02UI = (props: ISearchbars02UIProps) => {
  return (
    <S.Searchbar onSubmit={props.handleSubmit(props.onClickSearch)}>
      <S.SearchIcon />
      <S.SearchbarInput
        placeholder="검색어를 입력해 주세요."
        {...props.register("mysearch")}
      />
    </S.Searchbar>
  );
};
export default Searchbars02UI;
