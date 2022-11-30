// 게시판 목록 presenter

import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";
import { getDatecomma } from "../../../../commons/libraries/utils";
import { LikeIconsvg, Profilesvg } from "../../../../commons/styles/svgFill";

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
          <Profilesvg
            margin="0 6px 0 0"
            width="20"
            height="20"
            fill="#bdbdbd"
          />
          <S.BestBoardsName>{props.el?.writer}</S.BestBoardsName>
        </S.UserBox>
        <S.BestBoardsDate>
          Date: {getDatecomma(props.el?.createdAt)}
        </S.BestBoardsDate>
        <S.BestBoardsLikeBox>
          <LikeIconsvg width="20" height="18" fill="#ffd600" />
          <S.BestBoardsLikeCount>{props.el?.likeCount}</S.BestBoardsLikeCount>
        </S.BestBoardsLikeBox>
      </S.ContentsBox>
    </S.BestBoardsBox>
  );
};

export default BoardListBestBoards;
