// 게시판 등록 container

import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { withAuth } from "../../../commons/hocs/withAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  wirter: yup.string().required("작성자는 필수 입력사항입니다."),
});

function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  // Mutation
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  // 조건
  // 버튼 색상 조건
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // input 변수
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // onChange 함수
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // 주소 Modal 부분
  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    console.log(fileUrls);
  };

  // Click 함수
  // 등록하기 버튼
  const onClickSubmit = (data: string) => {
    console.log("data", data);
  };

  // const onClickSubmit = async () => {
  //   try {
  //     const result = await createBoard({
  //       variables: {
  //         createBoardInput: {
  //           writer,
  //           password,
  //           title,
  //           contents,
  //           youtubeUrl,
  //           boardAddress: {
  //             zipcode: zonecode,
  //             address,
  //             addressDetail,
  //           },
  //           images: fileUrls,
  //         },
  //       },
  //     });
  //     Modal.success({ content: "게시물 등록에 성공하였습니다!" });
  //     router.push(`/boards/${result.data.createBoard._id}`);
  //   } catch (errors: any) {
  //     alert(errors.message);
  //   }
  // };

  // 수정하기 버튼
  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    // 문자열로 변환
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    // 문자열로 변환
    const isChangedFiles = currentFiles !== defaultFiles;
    // 비교를 하기 위해 문자열로 변환한 것을 비교합니다.

    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zonecode &&
      !isChangedFiles
    ) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    // 비밀번호를 입력하지 않을 때 실행
    if (!password) {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zonecode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zonecode) updateBoardInput.boardAddress.zipcode = zonecode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      Modal.success({ content: "게시물 수정에 성공하였습니다!" });
      router.push(`/boards/${router.query.boardId}`);
    } catch (errors: any) {
      alert(errors.message);
    }
  };
  // =========================================

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
      // 이렇게 사용하는 것은 권장 nonono 하지만 한 줄로 나타낼 수 있어 이렇게 작성하겠습니다.
      // 상황에 따라 작성하는 방법을 바꾸면서 사용하면 될거 같습니다.
    }
  }, [props.data]);

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      // onChange
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFileUrls={onChangeFileUrls}
      // State 변수
      data={props.data}
      fileUrls={fileUrls}
      // Click
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      // Modal
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      // is 조건 활성화 변수
      isActive={isActive}
      isOpen={isOpen}
      isEdit={props.isEdit}
      address={address}
      zonecode={zonecode}
      addressDetail={addressDetail}
    />
  );
}

export default withAuth(BoardWrite);
