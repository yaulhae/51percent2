import styled from "styled-components";
import React from "react";
import homeImg from "../../img/1dfb7fe4e64ce34c34e2ad4a906cef9e_84307.jpg";

const HomeImgBlock = styled.div`
  width: 100%;
  height: 940px;
  background-image: url(${homeImg});
  background-repeat: no-repeat;
  background-position: 0 -170px;
  background-size: cover;
`;

const HomeImg = () => {
  return <HomeImgBlock></HomeImgBlock>;
};

export default HomeImg;
