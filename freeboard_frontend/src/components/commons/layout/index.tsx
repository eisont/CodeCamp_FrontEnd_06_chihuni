// Layout Page

import styled from "@emotion/styled";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import { ReactNode } from "react";
import { useRouter } from "next/router";
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

  const Mypage = ["/mypage"];

  const isMainPage = MainPage.includes(router.asPath);
  const isLoginPage = LoginPage.includes(router.pathname);
  const isSignupPage = SignupPage.includes(router.asPath);

  const isBoards = Boards.includes(router.asPath);
  const isMarkets = Markets.includes(router.asPath);
  const isMypage = Mypage.includes(router.asPath);

  return (
    <>
      {!isLoginPage && !isSignupPage && !isMainPage && <LayoutHeader />}
      {!isLoginPage && !isSignupPage && !isMainPage && <LayoutNavigation />}

      {(isBoards || isMarkets || isMypage) && <LayoutBanner />}
      <Modal1 />

      <Body>{props.children}</Body>
      {!isLoginPage && !isSignupPage && <LayoutFooter />}
    </>
  );
}
