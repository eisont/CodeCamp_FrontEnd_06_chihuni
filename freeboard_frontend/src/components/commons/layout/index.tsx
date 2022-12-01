// Layout Page

import styled from "@emotion/styled";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import WatchProduct from "../WatchProduct";
import Modal1 from "./modal";
import LayoutFooter from "./footer/Footer.container";

const Body = styled.div``;
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router.asPath);
  const MainPage = ["/"];
  const LoginPage = ["/login"];
  const SignupPage = ["/signup"];

  const Boards = ["/boards"];
  const Markets = ["/markets"];

  const MarketWrite = ["/markets/new"];
  const MarketDetail = [`/markets/${router.query.useditemId}`];
  const MarketEdit = [`/markets/${router.query.useditemId}/edit`];
  const Mypage = ["/mypage"];

  const isMainPage = MainPage.includes(router.asPath);
  const isLoginPage = LoginPage.includes(router.pathname);
  const isSignupPage = SignupPage.includes(router.asPath);

  const isBoards = Boards.includes(router.asPath);
  const isMarkets = Markets.includes(router.asPath);
  const isMypage = Mypage.includes(router.asPath);

  const isMarketWrite = MarketWrite.includes(router.asPath);
  const isMarketDetail = MarketDetail.includes(router.asPath);
  const isMarketEdit = MarketEdit.includes(router.asPath);
  return (
    <>
      {!isLoginPage && !isSignupPage && !isMainPage && <LayoutHeader />}
      {!isLoginPage && !isSignupPage && !isMainPage && <LayoutNavigation />}

      {(isBoards || isMarkets || isMypage) && <LayoutBanner />}
      <Modal1 />
      {!isLoginPage &&
        !isSignupPage &&
        !isMypage &&
        !isMarketDetail &&
        !isMarketWrite &&
        !isMarketEdit && <WatchProduct />}

      <Body>{props.children}</Body>
      {!isLoginPage && !isSignupPage && <LayoutFooter />}
    </>
  );
}
