import styled from "styled-components";

const StationMenu = ({ setStationOpen }) => {
  const OnStationClose = () => {
    setStationOpen(false);
  };
  return <SWrapper onClick={OnStationClose}>hihi</SWrapper>;
};
const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
export default StationMenu;
