import styled from "styled-components";

const CityMenu = ({ setCityOpen }) => {
  const OnCityClose = () => {
    setCityOpen(false);
  };
  return <SWrapper onClick={OnCityClose}>dfdfs</SWrapper>;
};
const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
export default CityMenu;
