// LayoutNavigation Page

import { useRouter } from "next/router";
import * as S from "./Navigation.styles";

export default function LayoutNavigation() {
  const router = useRouter();

  const Board = ["/boards"];
  const isBoard = Board.includes(router.asPath);
  const Markets = ["/markets"];
  const isMarkets = Markets.includes(router.asPath);

  const MyPage = ["/mypage"];
  const isMyPage = MyPage.includes(router.asPath);

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
  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  console.log(isBoard, isMarkets);
  return (
    <S.Wrapper>
      <S.BtBox>
        <S.Page>
          <S.PageBt onClick={onClickBoard} isBoard={isBoard}>
            Board
          </S.PageBt>
          <S.PageBt onClick={onClickMarket} isMarkets={isMarkets}>
            Market
          </S.PageBt>
          <S.PageBt onClick={onClickMypage} isMyPage={isMyPage}>
            My-Page
          </S.PageBt>
        </S.Page>
        {isBoard && (
          <S.WriteBt onClick={onClickMoveToBoardNew}>게시판 등록</S.WriteBt>
        )}
        {isMarkets && (
          <S.WriteBt onClick={onClickMoveToMarketNew}>상품 등록</S.WriteBt>
        )}
      </S.BtBox>
    </S.Wrapper>
  );
}
