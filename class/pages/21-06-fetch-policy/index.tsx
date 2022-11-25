import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import FetchPolicyTest from "../../src/components/units/board/21-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function GlobalStatePage() {
  // 여기서 우리가 봐야 하는 것은 이 부분에서 실제로 api 요청이 날라가는 것인가?
  // 기존에 있는 캐시를 가지고 오는 것인가?
  const { data } = useQuery(FETCH_BOARDS);
  const [aaa, setAaa] = useState(false);

  const onClickAaa = () => {
    setAaa(true);
  };

  return (
    <div>
      <button onClick={onClickAaa}>
        클릭하면 새로운 컴포넌트가 나타납니다!!
      </button>
      {/* 
        이 컴포넌트 안에도 api 요청이 있습니다. 
        우리가 알아봐야 하는 것은 컴포넌트 안에도 api 요청이 있고 상단 컴포넌트에도 api 요청이 있는 경우 api가 두번 요청 가는 것인가?
        아니면 자식 컴포넌트에서 날린 api에 캐시를 사용할 것인가? 입니다.
      */}
      {/* 
        결론은 
        하위 컴포넌트 api와 부모 컴포넌트의 데이터가 같을 경우 기존의 캐시를 사용합니다. 
        부모 컴포넌트에서 받을 데이터가 부족할 경우 추가로 받습니다.
      */}
      {aaa && <FetchPolicyTest />}
    </div>
  );
}
