import * as S from "./MyProfile.style";

const MyProfileUI = () => {
  return (
    <S.Section>
      <S.Title>비밀번호 변경</S.Title>
      <S.FlexBox>
        <S.Text>현재 비밀번호</S.Text>
        <S.Input placeholder="현재 비밀번호를 입력해 주세요." />
      </S.FlexBox>
      <S.FlexBox>
        <S.Text>새 비밀번호</S.Text>
        <S.Input placeholder="새 비밀번호를 입력해주세요." />
      </S.FlexBox>
      <S.FlexBox>
        <S.Text>새 비밀번호 확인</S.Text>
        <S.Input placeholder="새 비밀번호를 확인해주세요." />
      </S.FlexBox>

      <S.RightBox>
        <S.Button>비밀번호 변경</S.Button>
      </S.RightBox>
    </S.Section>
  );
};

export default MyProfileUI;
