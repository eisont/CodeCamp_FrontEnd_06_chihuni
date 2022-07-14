// LayoutNavigation Page

import { useRouter } from "next/router";
import * as S from "./Navigation.styles";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickBoard = () => {
    router.push("/boards");
  };
  const onClickMarket = () => {
    router.push("/markets");
  };
  const onClickMypage = () => {
    router.push("/mypage");
  };
  const onClickMoveToMarketNew = () => {
    router.push("/markets/new");
  };

  return (
    <S.Wrapper>
      <S.BtBox>
        <S.Page>
          <S.PageBt onClick={onClickBoard}>Board</S.PageBt>
          <S.PageBt onClick={onClickMarket}>Used Market</S.PageBt>
          <S.PageBt onClick={onClickMypage}>My-Page</S.PageBt>
        </S.Page>
        <S.WriteBt onClick={onClickMoveToMarketNew}>상품 등록</S.WriteBt>
      </S.BtBox>
    </S.Wrapper>
  );
}
