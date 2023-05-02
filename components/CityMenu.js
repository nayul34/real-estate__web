import styled from "styled-components";

const CityMenu = ({ setCityOpen, data }) => {
  const OnCityClose = () => {
    setCityOpen(false);
  };
  const onMovePage = (URL) => {
    window.open(URL);
  };
  return (
    <>
      <SModalBack>
        <SWrapper>
          <div className="box">
            <div className="top">
              <p>진주 혁신도시</p>
              <div className="close" onClick={OnCityClose}>
                x
              </div>
            </div>

            <p>(클릭시 관련 블로그로 이동합니다.)</p>
            <SCategory>
              {data.map((data) => (
                <div className="category" key={data.id}>
                  {data.title && (
                    <button className="title" onClick={onMovePage()}>
                      {data.title}
                    </button>
                  )}
                  <div className="choice">
                    {data.category1 && (
                      <button className="category_menu">
                        {data.category1}
                      </button>
                    )}
                    {data.category2 && (
                      <button className="category_menu">
                        {data.category2}
                      </button>
                    )}
                    {data.category3 && (
                      <button className="category_menu">
                        {data.category3}
                      </button>
                    )}
                    {data.category4 && (
                      <button className="category_menu">
                        {data.category4}
                      </button>
                    )}
                  </div>
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
  z-index: 999;
  top: 0%;
  .box {
    width: 50%;
    height: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .top {
    display: flex;
    .close {
      font-size: 2rem;
      width: 50%;
      text-align: right;
    }
  }
`;
const SCategory = styled.div`
  width: 80%;
  height: 80%;
  /* background-color: skyblue;xw */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .category {
    display: flex;
    .choice {
      display: flex;
    }
  }
`;
export default CityMenu;
