// our-getDomainLocale.com
import Header from "../components/Header";
import styled from "styled-components";
import Info from "../components/Info";
import Category from "../components/Category";
const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <SWrapper> */}
      <Info />
      <Category />
      {/* </SWrapper> */}
    </div>
  );
};
const SWrapper = styled.div`
  height: 60vh;
  background-color: gray;
  width: 100%;
`;
export default HomePage;
