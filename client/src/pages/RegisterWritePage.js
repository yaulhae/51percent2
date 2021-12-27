import styled from "styled-components";
import React from "react";
import RegisterWrite from "../components/register/RegisterWrite";
import HomeNav from "../components/home/HomeNav";
import logo from "../img/0dcefa870a310fe8e0f5434db0f95fcb_83387.svg";
import HomeFooterNav from "../components/common/HomeFooterNav";
import RegisterTop from "../components/common/RegisterTop";

const RegisterWritePage = () => {
  return (
    <>
      <HomeNav color="black" buttonColor="#B2FFB2" logo={logo} />
      <RegisterTop />
      <RegisterWrite />
      <HomeFooterNav />
    </>
  );
};

export default RegisterWritePage;
