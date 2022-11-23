// 중고마켓 목록 styles

import { SearchOutlined, DollarCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 50px auto;
  text-align: center;
`;

export const BestText = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #000;
`;
export const BestProduct = styled.div`
  width: 1200px;
  height: 473px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BestProductBox = styled.div`
  position: relative;
  padding: 20px;
  width: 282px;
  height: 391px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const BestProductImage = styled.img`
  width: 242px;
  height: 242px;
  object-fit: contain;
  cursor: pointer;
`;
export const BestProductName = styled.div`
  padding: 20px 0 4px 0;
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
export const BestProductRemark = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
  text-align: start;
`;
export const BestProductPrice = styled.div`
  padding: 12px 0 0 0;
  font-weight: 700;
  font-size: 18px;
  color: #000;
`;
export const BestProductLikeBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 24px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BestProductLikeIcon = styled.img`
  width: 20px;
`;
export const BestProductLikeCount = styled.div`
  padding: 4.65px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;

export const SectionBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const MenuBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
`;
export const OnSaleProduct = styled.div`
  margin: 0 20px 0 0;
  font-weight: 400;
  font-size: 18px;
  color: #4f4f4f;

  &:hover {
    cursor: pointer;
    color: #000;
    font-weight: 500;
    border-bottom: 1px solid #ffd600;
  }
`;
export const SoldProduct = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #4f4f4f;

  &:hover {
    cursor: pointer;
    color: #000;
    font-weight: 500;
    border-bottom: 1px solid #ffd600;
  }
`;
export const SearchIcon = styled(SearchOutlined)`
  font-size: 30px;
`;
export const Searchbar01 = styled.input`
  border-radius: 10px;
  border: 2px solid #dbdbdb;
  width: 95%;
  padding: 1vh;
  // background: #f0f;
`;

export const TableTop = styled.div`
  margin: 3vh 0;
  width: 100%;
  flex-direction: row;
`;

export const Row = styled.div`
  width: 100%;
  height: 200px;
  margin: 1% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #000;
`;
export const BigBox = styled.div`
  display: flex;
`;
export const FlexImages = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  height: 160px;
  width: 160px;
  object-fit: contain;
  cursor: pointer;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const ColumnName = styled.div`
  overflow: hidden;
  text-align: center;
  cursor: default;
  font-size: 24px;
  font-weight: 900;
`;
export const ColumnRemarks = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const ColumnTags = styled.div`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 700;
  color: #bdbdbd;
`;
export const FlexBox = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;
export const FlexUserpicture = styled.img`
  margin-right: 6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
export const FlexUser = styled.div`
  margin-right: 22px;
  font-size: 16px;
  font-weight: 700;
`;

export const LikeBox = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;
export const FlexPickIcon = styled.img`
  margin-right: 6px;
  width: 20px;
  color: #ffd600;
`;
export const FlexPick = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
export const FlexPrice = styled.div`
  font-weight: 900;
  font-size: 24px;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
  font-size: 16px;
`;
export const Dollar = styled(DollarCircleOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin-right: 11px;
`;
