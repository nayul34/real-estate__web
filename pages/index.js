// our-getDomainLocale.com
import Header from "../components/Header";
import styled from "styled-components";
import Info from "../components/Info";
import Category from "../components/Category";
const DUMMY_DATA = [
  {
    id: "1",
    call: "전화번호 :010-9677-8644",
    name: "이름 : 공효심",
    number: "등록번호 : ",
    address: "등록주소 : ",
  },
];
const HomePage = (props) => {
  return (
    <SWrapper>
      <Header />
      <Info data={props.data} />
      <Category />
    </SWrapper>
  );
};
export async function getStaticProps() {
  return {
    props: {
      data: DUMMY_DATA,
    },
    //이 페이지에 요청이 들어오면 적어도 10마다 서버에서 페이지를 다시 생성
    //데이터 업데이트 빈도에 따라 결정
    // revalidate: 10,
  };
}
const SWrapper = styled.div`
  /* height: 100%; */
  width: 100%;
`;
export default HomePage;
