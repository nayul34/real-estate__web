import styled from "styled-components";
const Info = () => {
  return (
    <SWrapper>
      <SInfo>
        <p>전화번호 : 010-9677-8644</p>
        <p>이름 : 공효심</p>
        <p>등록번호 :</p>
        <p>등록주소 :</p>
      </SInfo>
    </SWrapper>
  );
};
const SWrapper = styled.div`
  width: 100%;
  height: 45vh;
  background-color: skyblue;
`;
const SInfo = styled.div`
  height: 40%;
  width: 40%;
  background-color: white;
`;
export default Info;
