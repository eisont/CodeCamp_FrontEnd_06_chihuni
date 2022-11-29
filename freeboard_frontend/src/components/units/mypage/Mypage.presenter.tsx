import Script from "next/script";
import { PointComma } from "../../../commons/libraries/point";
import * as S from "./Mypage.styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/libraries/utils";
import Paginations01 from "../../commons/paginations/paginations/01/Paginations01.container";

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
          <S.UserPicture
            src={
              props.loggedInUser?.picture !== null
                ? props.loggedInUser?.picture
                : "./img/profileUser.png"
            }
          />
          <S.UserName>{props.loggedInUser?.name}</S.UserName>
          <S.UserPoint>
            <S.Icon src="./img/PointPig.png" />
            <div>{PointComma(props.loggedInUser?.userPoint?.amount)}원</div>
          </S.UserPoint>
          <S.Menu isMypage={props.isMypage}>
            <S.Icon src="./img/Shopping.png" />내 장터
          </S.Menu>
          <S.Menu>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 8C13 7.45 13.45 7 14 7C14.55 7 15 7.45 15 8C15 8.55 14.55 9 14 9C13.45 9 13 8.55 13 8ZM6 7H11V5H6V7ZM20 5.5V12.47L17.18 13.41L15.5 19H10V17H8V19H2.5C2.5 19 0 10.54 0 7.5C0 4.46 2.46 2 5.5 2H10.5C11.41 0.79 12.86 0 14.5 0C15.33 0 16 0.67 16 1.5C16 1.71 15.96 1.9 15.88 2.08C15.74 2.42 15.62 2.81 15.56 3.23L17.83 5.5H20ZM18 7.5H17L13.5 4C13.5 3.35 13.59 2.71 13.76 2.09C12.79 2.34 12 3.06 11.67 4H5.5C3.57 4 2 5.57 2 7.5C2 9.38 3.22 14.15 4.01 17H6V15H12V17H14.01L15.56 11.85L18 11.03V7.5Z" />
            </svg>
            내 포인트
          </S.Menu>
          <S.Menu>
            <S.Icon src="./img/Profile.png" />내 프로필
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
                <S.Td>{el?.contents}</S.Td>
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
          />
        </S.Section>
      </S.Wrapper>
    </>
  );
}
