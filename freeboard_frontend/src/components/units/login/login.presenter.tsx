// login Presenter

import * as S from "./login.styles";

export const LoginUI = (props: any) => {
  return (
    <S.Wrapper>
      <S.BackBt src="../img/Arrow.png" onClick={props.onClickHome} />
      <S.Contents>
        <S.CodeCampLogo src="../CodeCampLogo.png" />

        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <S.Section>
            <S.InputBox>
              <S.Input
                type="email"
                {...props.register("email")}
                placeholder="아이디를 입력하세요."
              />
              <S.Errors>{props.formState?.errors?.email?.message}</S.Errors>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                type="password"
                {...props.register("password")}
                placeholder="비밀번호를 입력하세요."
              />
              <S.Errors>{props.formState?.errors?.password?.message}</S.Errors>
            </S.InputBox>
            <S.LoginStay>
              <S.CheckIcon src="../img/LoginStayIcon.png" />
              로그인 상태 유지
            </S.LoginStay>
          </S.Section>

          <S.Button>로그인하기</S.Button>
        </form>

        <S.Hr />

        <S.SignupBox>
          <S.PageBt>아이디 찾기</S.PageBt>
          <S.Cross>|</S.Cross>
          <S.PageBt>비밀번호 찾기</S.PageBt>
          <S.Cross>|</S.Cross>
          <S.PageBt onClick={props.onClickSignup}>회원가입</S.PageBt>
        </S.SignupBox>
      </S.Contents>
    </S.Wrapper>
  );
};

export default LoginUI;
