import styled from "styled-components";

const Header = () => {
  return (
    <SWrapper>
      <p className="title">부강부동산</p>
    </SWrapper>
  );
};
const SWrapper = styled.div`
  height: 20vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 5rem;
  }
`;
export default Header;
