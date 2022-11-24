// 게시판 목록 presenter

import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";

const BoardListBestBoards = (props: any) => {
  return (
    <S.BestBoardsBox
      key={uuidv4()}
      id={props.el._id}
      onClick={props.onClickMoveToBoardDetail}
    >
      <S.BestBoardsImage src="./SectionPhoto.jpg" />
      <S.ContentsBox>
        <S.BestBoardsTitle>{props.el?.title}</S.BestBoardsTitle>
        <S.UserBox>
          <S.BestBoardsUserIcon src="./img/profileUser.png" />
          <S.BestBoardsName>{props.el?.writer}</S.BestBoardsName>
        </S.UserBox>
        <S.BestBoardsDate>
          Date: {getDate(props.el?.createdAt)}
        </S.BestBoardsDate>
        <S.BestBoardsLikeBox>
          <S.BestBoardsLikeIcon src="./img/like.png" />
          <S.BestBoardsLikeCount>{props.el?.likeCount}</S.BestBoardsLikeCount>
        </S.BestBoardsLikeBox>
      </S.ContentsBox>
    </S.BestBoardsBox>
  );
};

export default BoardListBestBoards;
