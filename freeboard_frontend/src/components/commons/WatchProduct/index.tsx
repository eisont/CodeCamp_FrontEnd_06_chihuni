// 오늘 본 상품
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { WatchProductState } from "../../../commons/store";

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 257px;
  z-index: 1;
  width: 155px;
  padding: 10px 0;

  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 10px;
`;
const RBox = styled.div`
  font-size: 20px;
  padding: 20px 0;
  font-weight: 900;
`;
const Best = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Product = styled.img`
  margin: 5px 0;
  width: 85px;
  height: 85px;
  background: #c4c4c4;
`;
const WatchProduct = () => {
  const [watchProduct] = useRecoilState(WatchProductState);

  useEffect(() => {
    JSON.parse(localStorage.getItem("watch") || "[]");
  }, []);

  return (
    <Wrapper>
      <RBox>최근 본 상품</RBox>
      {watchProduct.map((el) => (
        <Best key={el._id}>
          <Product
            src={
              el.images[0]
                ? `https://storage.googleapis.com/${el.images[0]}`
                : "http://eumseongcci.korcham.net/images/no-image01.gif"
            }
          />
        </Best>
      ))}
    </Wrapper>
  );
};
export default WatchProduct;
