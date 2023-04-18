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
      <SMap>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13046.139639185318!2d128.1333656!3d35.1682182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356efddfc971f8f3%3A0x45585e23ac489df1!2z67aA6rCV67aA64-Z7IKw!5e0!3m2!1sko!2skr!4v1681395019395!5m2!1sko!2skr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </SMap>
    </SWrapper>
  );
};
const SWrapper = styled.div`
  width: 100%;
  height: 45vh;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SInfo = styled.div`
  height: 70%;
  width: 40%;
  background-color: white;
  margin-right: 10px;
`;
const SMap = styled.main`
  width: 40%;
  height: 70%;
  background-color: white;
  margin-left: 10px;
  .map {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
export default Info;
