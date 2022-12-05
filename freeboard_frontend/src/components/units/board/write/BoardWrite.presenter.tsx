// 게시판 등록 presenter

import * as S from "./BoardWrite.styles";
import { Modal } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcode from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.containder";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</S.Title>
      <S.WriterWrapper>
        {/* 작성자 */}
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <S.Writer
              type="text"
              placeholder="(필수) 이름을 입력해주세요."
              // onChange={props.onChangeWriter}
              {...props.register("writer")}
              readOnly={!!props.data?.fetchBoard.writer}
              defaultValue={props.data?.fetchBoard.writer || ""}
            />
          </form>
        </S.InputWrapper>
        {/* 비밀번호 */}
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="(필수) 비밀번호를 작성해주세요."
            onChange={props.onChangePassword}
          />
        </S.InputWrapper>
      </S.WriterWrapper>

      {/* 제목 */}
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="(필수) 제목을 작성해주세요."
          onChange={props.onChangeTitle}
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="(필수) 내용을 작성해주세요."
          onChange={props.onChangeContents}
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZonecodeWrapper>
          <S.Zonecode
            placeholder="00000"
            readOnly
            // value랑 defaultValue를 같이 작성합니다.
            value={
              props.zonecode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||
              "00000"
            }
          />
          <S.SearchButton type="button" onClick={props.onClickAddressSearch}>
            우편번호 검색
          </S.SearchButton>
          {props.isOpen && (
            <Modal
              visible={props.isOpen}
              onOk={props.onClickAddressSearch}
              onCancel={props.onClickAddressSearch}
              width={800}
              closeIcon={<SmileOutlined />}
            >
              <DaumPostcode onComplete={props.onCompleteAddressSearch} />
            </Modal>
          )}
        </S.ZonecodeWrapper>
        <S.Addressbasic
          readOnly
          value={
            props.address ||
            props.data?.fetchBoard.boardAddress?.address ||
            "(선택) 주소를 선택해주세요."
          }
        />
        <S.AddressDetail
          placeholder="(선택) 상세 주소를 입력해주세요."
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.addressDetail ||
            props.data?.fetchBoard.boardAddress?.addressDetail ||
            ""
          }
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          placeholder="(선택) 링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        />
      </S.InputWrapper>

      <S.ImageWrapper>
        <S.ImageTitle>사진 첨부</S.ImageTitle>
        {props.fileUrls.map((el, index) => (
          <Uploads01
            key={uuidv4()}
            index={index}
            fileUrl={el}
            onChangeFileUrls={props.onChangeFileUrls}
          />
        ))}
        {/* <GraphqlMutationPageUI fileRef /> */}
      </S.ImageWrapper>

      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>

      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
