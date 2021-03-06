// Header Query

import { gql } from "@apollo/client";

// 포인트 충전
export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;
// 회원정보 확인
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
      createdAt
    }
  }
`;
// 찜하기
export const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
// 로그아웃
export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
