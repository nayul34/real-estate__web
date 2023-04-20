import styled from "styled-components";
import { useState } from "react";
import CityMenu from "./CityMenu";
import StationMenu from "./StationMenu";
const Category = () => {
  const [cityOpen, setCityOpen] = useState(false);
  const [stationOpen, setStationOpen] = useState(false);
  const OnCityOpen = () => {
    setCityOpen(true);
  };
  const OnStationOpen = () => {
    setStationOpen(true);
  };
  return (
    <div>
      <SWrapper>
        <p className="name">Category</p>
        <div className="category">
          <div className="new_city" onClick={OnCityOpen}>
            <p className="cityname">진주 혁신도시</p>
          </div>
          <div className="station" onClick={OnStationOpen}>
            <p className="station_name">진주 역세권</p>
          </div>
        </div>
      </SWrapper>
      {cityOpen && <CityMenu setCityOpen={setCityOpen} />}
      {stationOpen && <StationMenu setStationOpen={setStationOpen} />}
    </div>
  );
};
const SWrapper = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .name {
    font-size: 2rem;
  }
  .category {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .new_city {
    height: 70%;
    width: 40%;
    background-color: orange;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .cityname {
      font-size: 2rem;
    }
  }
  .station {
    height: 70%;
    width: 40%;
    background-color: orange;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .station_name {
      font-size: 2rem;
    }
  }
`;
export default Category;
