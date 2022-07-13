// login Styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -9999;
  transform: translate(0px, -80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  flex-direction: column;
`;
export const Header = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: end;
`;
export const LoginTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
`;
export const InputBx = styled.div`
  width: 600px;
`;
export const Input = styled.input`
  width: 80%;
  padding: 10px 0;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid #999;
`;
export const Button = styled.button`
  width: 80%;
  padding: 10px 0;
  border: none;
  font-size: 20px;
  background: #ffe004;
  font-weight: 900;
  border-radius: 10px;
  text-align: center;
`;
export const JoinBox = styled.div`
  width: 600px;
  margin-top: 39px;
  display: flex;
  color: #888888;
  font-size: 18px;
  justify-content: center;
`;
export const Join = styled.div`
  margin-left: 22px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  color: #000;
  text-decoration: underline;
`;
