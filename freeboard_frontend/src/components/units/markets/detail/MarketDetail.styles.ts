// 중고마켓 상세보기 styles

import styled from "@emotion/styled";
import {
  LinkOutlined,
  EnvironmentOutlined,
  HeartOutlined,
} from "@ant-design/icons";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 64px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;
export const UserProfilePhoto = styled.img`
  width: 40px;
  font-size: 47px;
  margin-right: 20px;
`;
export const UserName = styled.div`
  font-size: 24px;
  font-weight: 900;
`;
export const CreatedAt = styled.div`
  color: #828282;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;
export const SharingImg = styled(LinkOutlined)`
  cursor: pointer;
  transform: rotate(45deg);
  font-size: 26px;
  color: #ffd600;
`;
export const LotationImg = styled(EnvironmentOutlined)`
  margin-left: 25px;
  font-size: 27px;
  color: #ffd600;
`;

export const Hr = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 1px;
  background: #dbdbdb;
`;

export const Body = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Section1Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Section1LBox = styled.div`
  height: 67px;
  display: flex;
  flex-direction: column;
`;

export const SectionText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #dbdbdb;
`;
export const ProductName = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4f4f4f;
`;

export const Section1RBox = styled.div`
  width: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
`;
export const OutLineHeart = styled(HeartOutlined)`
  font-size: 30px;
  margin-right: 6px;
  color: #ffd600;
`;
export const FillHeart = styled.img`
  width: 30px;
  margin-right: 6px;
`;
export const SectionPrice = styled.div`
  font-weight: 900;
  font-size: 36px;
`;
export const SectionPhoto = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Image = styled.img`
  height: 300px;
  object-fit: contain;
`;
export const SectionContent = styled.p`
  font-size: 16px;
  margin: 40px 0 0 0;
`;

export const SectionTags = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Text = styled.span`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background: yellow;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  padding: 2px 10px;
  margin: 20px 5px 20px 0;
`;
export const MenuButtons = styled.div`
  display: flex;
`;
export const Button = styled.button`
  width: 180px;
  height: 45px;
  margin: 70px 12px;
  font-size: 16px;
  font-weight: 600;
  display: inline;
  background: #fff;
  border: 1px solid #bdbdbd;
  &:hover {
    background-color: gold;
    border-color: white;
  }
`;
