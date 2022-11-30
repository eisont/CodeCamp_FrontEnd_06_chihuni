import Script from "next/script";
import { PointComma } from "../../../commons/libraries/point";
import * as S from "./Mypage.styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/libraries/utils";
import Paginations01 from "../../commons/paginations/paginations/01/Paginations01.container";
import {
  Cartsvg,
  PointPigsvg,
  Profilesvg,
} from "../../../commons/styles/svgFill";
import DOMPurify from "dompurify";
// import Searchbars01 from "../../commons/searchbars/01/Searchbars01.container";

export default function MypageUIpage(props: any) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <S.Wrapper>
        <S.UserInfo>
          <S.Title>MYPAGE</S.Title>
          {props.loggedInUser?.picture !== null ? (
            <S.UserPicture src={props.loggedInUser?.picture} />
          ) : (
            <Profilesvg width="80" height="80" fill="#bdbdbd" />
          )}
          <S.UserName>{props.loggedInUser?.name}</S.UserName>
          <S.UserPoint>
            <PointPigsvg
              width="20"
              height="19"
              fill="#ffd600"
              margin="0 8px 0 0"
            />
            <div>{PointComma(props.loggedInUser?.userPoint?.amount)}원</div>
          </S.UserPoint>
          <S.Menu isMypage={props.isMypage}>
            <Cartsvg width="21" height="20" fill="#FFD600" margin="0 8px 0 0" />
            내 장터
          </S.Menu>
          <S.Menu>
            <PointPigsvg
              width="20"
              height="19"
              fill="#828282"
              margin="0 8px 0 0"
            />
            내 포인트
          </S.Menu>
          <S.Menu>
            <Profilesvg
              width="20"
              height="20"
              fill="#828282"
              margin="0 8px 0 0"
            />
            내 프로필
          </S.Menu>
        </S.UserInfo>
        <S.Hr />
        <S.Section>
          <S.SectionHead>
            <S.MenuBox>
              {/* <S.SubMenu>나의 상품</S.SubMenu>
              <S.Hrs /> */}
              <S.SubMenu isMypage={props.isMypage}>마이 찜</S.SubMenu>
            </S.MenuBox>
            {/* <Searchbars01 />  검색이 안되서 빼겠습니다. */}
          </S.SectionHead>

          <S.SectionMain>
            <S.Row>
              <S.Th>번호</S.Th>
              <S.Th>상품명</S.Th>
              <S.Th></S.Th>
              <S.Th>판매가격</S.Th>
              <S.Th>판매자</S.Th>
              <S.Th>날짜</S.Th>
            </S.Row>
            {props.pickData?.map((el: any, index: number) => (
              <S.Row key={uuidv4()}>
                <S.Td>{index + 1}</S.Td>

                {typeof window !== "undefined" && (
                  <S.Td
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(String(el?.contents)),
                    }}
                  />
                )}
                {el?.buyer !== null ? (
                  <S.Td style={{ color: "#FFD600", fontWeight: "700" }}>
                    판매 완료
                  </S.Td>
                ) : (
                  <S.Td />
                )}
                <S.Td>￦ {PointComma(el?.price)}</S.Td>
                <S.Td>{el?.seller?.name}</S.Td>
                <S.Td>{getDate(el?.createdAt)}</S.Td>
              </S.Row>
            ))}
          </S.SectionMain>

          <Paginations01
            count={props.pickCountData}
            refetch={props.IPickedRefetch}
            margin="40px 0"
          />
        </S.Section>
      </S.Wrapper>
    </>
  );
}
