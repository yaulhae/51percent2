import styled from "styled-components";
import React from "react";
import HomeNav from "../components/home/HomeNav";
import HomeImg from "../components/home/HomeImg";
import HomeFooter from "../components/home/HomeFooter";
import logo from "../img/e8c3edbd4eed5859becb3f3251b996c5_50870.svg";

const HomePageBlock = styled.div`
  padding-bottom: 23px;
`;

const HomePage = () => {
  return (
    <HomePageBlock>
      <HomeNav color="white" buttonColor="#81cb7c" logo={logo} />
      <HomeImg />
      <HomeFooter />
    </HomePageBlock>
  );
};

export default HomePage;
