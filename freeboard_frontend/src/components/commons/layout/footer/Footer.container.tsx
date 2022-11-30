import { Instagramsvg } from "../../../../commons/styles/svgFill";
import * as S from "./Footer.styled";

const LayoutFooter = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <S.Text>FOOTER</S.Text>
        <S.SnSBox>
          <Instagramsvg />
        </S.SnSBox>
        <S.Hr />
        <S.InfoText>@2022 chihuni portfolio</S.InfoText>
      </S.Body>
    </S.Wrapper>
  );
};

export default LayoutFooter;
