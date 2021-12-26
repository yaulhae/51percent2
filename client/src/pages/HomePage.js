import styled from "styled-components";
import React from "react";
import HomeNav from "../components/home/HomeNav";
import HomeImg from "../components/home/HomeImg";
import HomeFooter from "../components/home/HomeFooter";

const HomePageBlock = styled.div`
  padding-bottom: 23px;
`;

const HomePage = () => {
  return (
    <HomePageBlock>
      <HomeNav />
      <HomeImg />
      <HomeFooter />
    </HomePageBlock>
  );
};

export default HomePage;
