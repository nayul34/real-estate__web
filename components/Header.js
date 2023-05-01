import styled from "styled-components";

const Header = ({ data }) => {
  return (
    <SWrapper>
      <p className="title">{data[0].title}</p>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  height: 15vh;
  width: 100%;
  border-bottom: 2px solid gray;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 5rem;
  }
`;
export default Header;
