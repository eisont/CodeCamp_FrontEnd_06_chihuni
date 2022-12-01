// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { IMarketListUIProps } from "./MarketList.types";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import MarketListUIItem from "./MarketList.presenterItem";
import { v4 as uuidv4 } from "uuid";
import MarketListBestProduct from "./MarketList.presenterBestProduct";

export default function MarketListUI(props: IMarketListUIProps) {
  console.log("data", props.data?.fetchUseditems);

  if (!props.data) return <div />;
  return (
    <S.Wrapper>
      <S.BestBox>
        <S.BestText>베스트 상품</S.BestText>
        <S.BestProduct>
          {props.BestProduct?.fetchUseditemsOfTheBest.map((el) => (
            <MarketListBestProduct
              key={uuidv4()}
              el={el}
              onClickMoveToMarketDetail={props.onClickMoveToMarketDetail}
            />
          ))}
        </S.BestProduct>
      </S.BestBox>

      <S.SearchBox>
        <S.MenuBox>
          <S.Menu>판매중 상품</S.Menu>
          <S.Menu>판매된 상품</S.Menu>
        </S.MenuBox>
        <Searchbars01 refetch={props.refetch} />
      </S.SearchBox>

      <S.Box>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el: any) => (
            <MarketListUIItem
              key={el._id}
              el={el}
              onClickMoveToMarketDetail={props.onClickMoveToMarketDetail}
            />
          ))}
        </InfiniteScroll>
      </S.Box>

      <S.JustifyBox>
        <S.WriteItem onClick={props.onClickMoveToMarketNew}>
          상품 등록하기
        </S.WriteItem>
      </S.JustifyBox>
    </S.Wrapper>
  );
}
