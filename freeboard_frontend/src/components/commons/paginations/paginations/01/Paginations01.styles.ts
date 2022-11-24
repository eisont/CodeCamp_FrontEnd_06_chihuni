import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Page = styled.span`
  font-size: 25px;
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
`;
