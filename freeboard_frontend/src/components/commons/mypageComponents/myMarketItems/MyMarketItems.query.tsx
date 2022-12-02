import { gql } from "@apollo/client";

// 마이찜
export const FETCHUSED_ITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
      _id
      contents
      price
      buyer {
        _id
      }
      seller {
        name
      }
      createdAt
    }
  }
`;

// 마이찜 Count
export const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
