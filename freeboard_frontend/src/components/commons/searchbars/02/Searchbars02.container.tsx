import { useForm } from "react-hook-form";
import Searchbars02UI from "./Searchbars02.presenter";

interface IFormValues {
  search: string;
  mysearch: string;
}

const Searchbars02 = (props: any) => {
  const { register, handleSubmit } = useForm();

  const onClickSearch = (data: IFormValues) => {
    props.refetch({ search: data?.mysearch, page: 1 });
  };

  return (
    <Searchbars02UI
      register={register}
      handleSubmit={handleSubmit}
      onClickSearch={onClickSearch}
    />
  );
};

export default Searchbars02;
