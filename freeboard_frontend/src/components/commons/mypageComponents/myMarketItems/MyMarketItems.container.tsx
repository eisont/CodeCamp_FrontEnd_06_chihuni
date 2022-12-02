import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import MyMarketsItemsUI from "./MyMarketItems.presenter";
import {
  FETCHUSED_ITEMS_IPICKED,
  FETCH_USED_ITEMS_COUNT_IPICKED,
} from "./MyMarketItems.query";

const MyMarketsItems = () => {
  const [myItems, setMyItems] = useState(true);
  const [myPicked, setMyPicked] = useState(false);

  const onClickMyItems = () => {
    setMyItems(true);
    setMyPicked(false);
  };
  const onClickMyPicked = () => {
    setMyItems(false);
    setMyPicked(true);
  };

  const { data: pickData, refetch: IPickedRefetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCHUSED_ITEMS_IPICKED, { variables: { search: "" } });

  const { data: pickCountData } = useQuery(FETCH_USED_ITEMS_COUNT_IPICKED);

  return (
    <MyMarketsItemsUI
      myItems={myItems}
      myPicked={myPicked}
      onClickMyItems={onClickMyItems}
      onClickMyPicked={onClickMyPicked}
      pickData={pickData?.fetchUseditemsIPicked}
      pickCountData={pickCountData?.fetchUseditemsCountIPicked}
      IPickedRefetch={IPickedRefetch}
    />
  );
};

export default MyMarketsItems;
