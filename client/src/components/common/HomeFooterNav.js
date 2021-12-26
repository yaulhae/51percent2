import styled from "styled-components";
import React from "react";

const HomeFooterNavBlock = styled.div`
  height: 23px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: white;
  padding: 0 20px;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;

const HomeFooterNav = () => {
  return (
    <HomeFooterNavBlock>
      <span>ABOUT</span>
      <span>SHOWROOM</span>
      <span>CONTACT</span>
      <span>STOCKIST</span>
    </HomeFooterNavBlock>
  );
};

export default HomeFooterNav;
