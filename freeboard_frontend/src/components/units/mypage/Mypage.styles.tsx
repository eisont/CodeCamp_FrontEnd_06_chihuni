import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 56px 0;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  cursor: default;
  align-items: flex-start;
`;

export const UserInfo = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const UserPicture = styled.img`
  margin: 48px 0 28px 0;
  width: 80px;
  height: 80px;
`;
export const UserName = styled.div`
  margin: 0 0 10px 0;
  font-size: 24px;
  font-weight: 700;
`;
export const UserPoint = styled.div`
  margin: 0 0 76px 0;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
`;
export const Icon = styled.img`
  margin: 0 8px 0 0;
  width: 20px;
`;

export const Hr = styled.div`
  margin: 0 40px;
  width: 2px;
  height: 1100px;
  transform: translate(0, -56px);
  background: rgba(242, 242, 242, 0.4);
`;

export const Menu = styled.div`
  margin: 0 0 23px 0;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isMypage ? "#000" : "#b2b2b2")};

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: #000;
  }
`;

export const Section = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionHead = styled.div`
  width: 100%;
  padding: 0 0 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuBox = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
`;
export const SubMenu = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.isMypage ? "#000" : "#828282")};
  border-bottom: ${(props) => props.isMypage && "1px solid #ffd600"};

  &:hover {
    cursor: pointer;
    color: #000;
    border-bottom: 1px solid #ffd600;
  }
`;
export const Hrs = styled.div`
  margin: 0 12px;
  width: 1px;
  height: 16px;
  background: #bdbdbd;
`;

export const SectionMain = styled.div`
  width: 100%;

  border: 1px solid #000;
  border-right: none;
  border-left: none;
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(4, 1.5fr);
  text-align: center;
`;
export const Th = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000;
`;
export const Td = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;
