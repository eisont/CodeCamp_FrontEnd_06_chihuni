// login Presenter

import * as S from "./login.styles";

export const LoginUI = (props: any) => {
  return (
    <S.Wrapper>
      <S.BackBt src="../img/Arrow.png" onClick={props.onClickHome} />
      <S.Contents>
        <S.LoginTitle>로그인</S.LoginTitle>

        <form onSubmit={props.handleSubmit(props.onClickCreateUser)}>
          <S.InputBx>
            <S.Input
              type="email"
              {...props.register("email")}
              onChange={props.onChangeEmail}
              placeholder="아이디를 입력하세요."
            />
            <S.Input
              type="password"
              {...props.register("password")}
              onChange={props.onChangePassword}
              placeholder="비밀번호를 입력하세요."
            />
          </S.InputBx>

          <S.LoginStay>
            <S.CheckIcon src="../img/LoginStayIcon.png" />
            로그인 상태 유지
          </S.LoginStay>

          <S.Button onClick={props.onClickCreateUser}>로그인하기</S.Button>
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
