// 중고마켓 댓글 목록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons";

export const ItemWrapper = styled.div`
  width: 792px;
  margin: 0 auto;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const SecondBox = styled.div`
  margin-left: 16px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;
export const Contents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;
export const CreateAt = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #dbdbdb;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const QuestionIcon = styled(FormOutlined)`
  font-size: 18px;
  color: #dbdbdb;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
export const UpdateIcon = styled(EditOutlined)`
  font-size: 18px;
  color: #dbdbdb;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
export const DeleteIcon = styled(CloseOutlined)`
  font-size: 18px;
  color: #dbdbdb;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
