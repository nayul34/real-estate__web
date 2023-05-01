import styled from "styled-components";

const StationnMenu = ({ setStationOpen, data }) => {
  const OnStationClose = () => {
    setStationOpen(false);
  };
  console.log(data);
  return (
    <>
      <SModalBack>
        <SWrapper>
          <div className="box">
            <div className="top">
              <p>{data[0].title}</p>
              <div className="close" onClick={OnStationClose}>
                x
              </div>
            </div>

            <p>(클릭시 관련 블로그로 이동합니다.)</p>
            <SCategory>
              {data.map((data) => (
                <div className="category" key={data.id}>
                  <p>{data.category1}</p>
                  <p>{data.category2}</p>
                  <p>{data.category3}</p>
                  <p>{data.category4}</p>
                </div>
              ))}
            </SCategory>
          </div>
        </SWrapper>
      </SModalBack>
    </>
  );
};
export const SModalBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0%;
  left: 0%;
`;
const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    display: flex;
  }
  .close {
    font-size: 2rem;
    width: 50%;
    text-align: right;
  }
  .box {
    width: 50%;
    height: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  z-index: 999;
  top: 0%;
`;
const SCategory = styled.div`
  width: 80%;
  height: 80%;
  background-color: skyblue;
  display: flex;
  justify-content: space-between;
  .category {
  }
`;
export default StationnMenu;
