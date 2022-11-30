import { EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestText = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  color: #000;
`;
export const BestBoards = styled.div`
  width: 1200px;
  height: 339px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BestBoardsBox = styled.div`
  position: relative;
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    cursor: pointer;
  }
`;
export const BestBoardsImage = styled.img`
  width: 282px;
  height: 120px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 20px 20px 0 0;
`;
export const ContentsBox = styled.div`
  padding: 20px;
`;
export const BestBoardsTitle = styled.div`
  padding: 0 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
export const UserBox = styled.div`
  padding: 0 0 8px 0;
  display: flex;
  align-items: center;
`;
export const BestBoardsName = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;
export const BestBoardsDate = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #828282;
`;
export const BestBoardsLikeBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 24px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BestBoardsLikeCount = styled.div`
  padding: 4.65px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;

export const SectionBox = styled.div`
  width: 1200px;
`;
interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "#000")};
`;

export const SearchBox = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TableTop = styled.div`
  margin: 3vh 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7vh;
  line-height: 7vh;
  border-bottom: 1px solid gray;

  :hover {
    color: #bdbdbd;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 60%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
  font-size: 16px;
`;

export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
  font-size: 16px;

  :hover {
    color: #bdbdbd;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export const Button = styled.button`
  width: 20vh;
  height: 7vh;
  font-size: 2vh;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const Paginations01 = styled.div``;
export const PencilIcon = styled(EditOutlined)``;
export const PageList = styled(EditOutlined)``;
