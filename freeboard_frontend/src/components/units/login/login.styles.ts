// login Styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../BG.png");
`;
export const BackBt = styled.img`
  width: 17px;
  position: absolute;
  top: 80px;
  right: 80px;
  transition: 0.2s;

  &:hover {
    width: 20px;
    cursor: pointer;
  }
`;
export const Contents = styled.div`
  text-align: center;
`;
export const LoginTitle = styled.div`
  margin-bottom: 32px;
  font-size: 30px;
  font-weight: 900;
  color: #fff;
`;
export const InputBx = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin: 0 0 20px 0;
  padding: 20px 16px;
  width: 384px;
  height: 64px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 16px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255);

  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const LoginStay = styled.div`
  margin: 0 0 40px 0;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  display: flex;
  align-items: center;
`;
export const CheckIcon = styled.img`
  margin: 0 16px 0 0;
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  width: 384px;
  height: 64px;

  padding: 10px 0;
  border: none;
  font-size: 16px;
  font-weight: 700;

  color: #fff;
  background: #4f4f4f;
  border-radius: 16px;
  text-align: center;

  &:hover {
    background: #ffd600;
    color: #737373;
    cursor: pointer;
  }
  &:active {
    background: #dbbe18;
    cursor: pointer;
  }
`;

export const Hr = styled.div`
  margin: 40px 0 30px 0;
  width: 100%;
  height: 1px;
  background: #fff;
`;

export const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageBt = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Cross = styled.div`
  color: #fff;
  margin: 0 20px;
`;
