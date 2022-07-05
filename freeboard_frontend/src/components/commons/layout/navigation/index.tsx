import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 #dbdbdb;
  background: #fff;
  display: flex;
  align-items: center;
`;
const BtBox = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Page = styled.div`
  display: flex;
  align-items: center;
`;
const PageBt = styled.div`
  padding: 0 50px 0 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #999;
    font-weight: 900;
  }
`;
const WriteBt = styled.div`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #999;
    font-weight: 900;
  }
`;

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
    <Wrapper>
      <BtBox>
        <Page>
          <PageBt onClick={onClickBoard}>Board</PageBt>
          <PageBt onClick={onClickMarket}>Used Market</PageBt>
          <PageBt onClick={onClickMypage}>My-Page</PageBt>
        </Page>
        <WriteBt onClick={onClickMoveToMarketNew}>상품 등록</WriteBt>
      </BtBox>
    </Wrapper>
  );
}
