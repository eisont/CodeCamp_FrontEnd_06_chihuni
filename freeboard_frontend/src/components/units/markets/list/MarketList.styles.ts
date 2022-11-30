// 중고마켓 목록 styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

// Best Box
export const BestBox = styled.div`
  margin: 80px auto;

  width: 100%;
  height: 473px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const BestText = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #000;
`;
export const BestProduct = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Best Product
export const BestProductBox = styled.div`
  position: relative;
  padding: 20px;
  width: 282px;
  height: 391px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  backgroun: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;
export const BestProductImage = styled.img`
  width: 242px;
  height: 242px;
  object-fit: contain;
`;
export const BestProductName = styled.div`
  padding: 20px 0 4px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
export const BestProductRemark = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
`;
export const BestProductPrice = styled.div`
  width: 100%;
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

export const BestProductLikeCount = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;

// Section Box
export const SearchBox = styled.div`
  margin: 0 0 40px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MenuBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Menu = styled.div`
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

// infiniteScroll part
export const Row = styled.div`
  margin: 0 0 20px 0;
  padding: 20px 0 0 0;
  width: 100%;
  height: 181px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bdbdbd;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  height: 160px;
  width: 160px;
  object-fit: contain;
  cursor: pointer;
`;

export const ColumnBox = styled.div`
  margin: 0 0 0 40px;
  width: 850px; // 임시 가로길이
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #000;
`;
export const Remarks = styled.div`
  margin: 4px 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
`;
export const ColumnTags = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const SellerIcon = styled.img`
  margin: 0 6px 0 0;
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
export const Seller = styled.div`
  margin-right: 22px;
  font-size: 16px;
  font-weight: 700;
  color: #4f4f4f;
`;
export const Pick = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const FlexPrice = styled.div`
  font-weight: 900;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #000;
`;
