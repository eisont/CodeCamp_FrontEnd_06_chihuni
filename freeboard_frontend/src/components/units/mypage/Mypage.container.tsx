import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { FetchUserLoggedIn } from "../../../commons/store";
import { withAuth } from "../../commons/hocs/withAuth";
import MypageUIpage from "./Mypage.presenter";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING } from "./Mypage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

function MypagePage() {
  const [chargePrice] = useState(100);

  // 내 장터
  const [myMarketsItems, setMyMarketsItems] = useState(true);
  // 내 포인트
  const [myPoint, setMyPoint] = useState(false);
  // 내 프로필
  const [myProfile, setMyProfile] = useState(false);

  const [loggedInUser] = useRecoilState(FetchUserLoggedIn);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  //
  const onClickResult = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: "" },
      });
      console.log("result", result);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // 충전
  const onClickPoint = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp48430943"); // 예: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: chargePrice,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          alert("결제 완료!");
        } else {
          // 결제 실패 시 로직
          alert("결제 실패!");
        }
      }
    );
  };

  // 내 장터
  const onClickMyMarketItems = () => {
    setMyMarketsItems(true);
    setMyPoint(false);
    setMyProfile(false);
  };
  // 내 포인트
  const onClickMyPoint = () => {
    setMyMarketsItems(false);
    setMyPoint(true);
    setMyProfile(false);
  };
  // 내 프로필
  const onClickMyProfile = () => {
    setMyMarketsItems(false);
    setMyPoint(false);
    setMyProfile(true);
  };

  return (
    <MypageUIpage
      myMarketsItems={myMarketsItems}
      myPoint={myPoint}
      myProfile={myProfile}
      loggedInUser={loggedInUser?.fetchUserLoggedIn}
      onClickResult={onClickResult}
      onClickPoint={onClickPoint}
      onClickMyMarketItems={onClickMyMarketItems}
      onClickMyPoint={onClickMyPoint}
      onClickMyProfile={onClickMyProfile}
    />
  );
}

export default withAuth(MypagePage);
