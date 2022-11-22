// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { PointComma } from "../../../../commons/libraries/point";
import { getDate } from "../../../../commons/libraries/utils";

const MarketListUIItem = (props: any) => {
  return (
    <S.Row key={props.el._id}>
      <S.BigBox>
        <S.FlexImages>
          <S.Image
            id={props.el._id}
            onClick={props.onClickMoveToMarketDetail(props.el)}
            src={
              props.el.images[0]
                ? `https://storage.googleapis.com/${props.el.images[0]}`
                : "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
            }
          />
        </S.FlexImages>

        <S.ColumnBox>
          <S.ColumnName>{props.el.name}</S.ColumnName>
          <S.ColumnRemarks>{props.el.remarks} </S.ColumnRemarks>
          {props.el.tags.length === 0 ? (
            <S.ColumnTags>해시태그 없음</S.ColumnTags>
          ) : (
            <S.ColumnTags> {props.el.tags} </S.ColumnTags>
          )}
          <div>{getDate(props.el.createdAt)}</div>

          <S.FlexBox>
            <S.FlexUserpicture
              src={
                props.el?.seller?.picture === null
                  ? "../img/profileUser.png"
                  : `${props.el?.seller?.picture}`
              }
            />
            <S.FlexUser> {props.el?.seller?.name} </S.FlexUser>
            <S.LikeBox>
              <S.FlexPickIcon src="./img/heart.svg" />
              <S.FlexPick> {props.el?.pickedCount} </S.FlexPick>
            </S.LikeBox>
          </S.FlexBox>
        </S.ColumnBox>
      </S.BigBox>
      <S.FlexPrice>
        <S.Dollar />
        {PointComma(props.el.price)}원
      </S.FlexPrice>
    </S.Row>
  );
};

export default MarketListUIItem;
