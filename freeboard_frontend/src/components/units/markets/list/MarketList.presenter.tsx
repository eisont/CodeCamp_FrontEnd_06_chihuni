// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { IMarketListUIProps } from "./MarketList.types";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import MarketListUIItem from "./MarketList.presenterItme";

export default function MarketListUI(props: IMarketListUIProps) {
  if (!props.data) return <div />;
  return (
    <S.Wrapper>
      <S.Search>
        <Searchbars01 refetch={props.refetch} />
      </S.Search>
      <S.TableTop>
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
      </S.TableTop>
    </S.Wrapper>
  );
}
