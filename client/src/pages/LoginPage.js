import styled from "styled-components";
import React from "react";
import LoginForm from "../components/login/LoginForm";
import HomeNav from "../components/home/HomeNav";
import HomeFooter from "../components/home/HomeFooter";
import HomeFooterNav from "../components/common/HomeFooterNav";
import logo from "../img/0dcefa870a310fe8e0f5434db0f95fcb_83387.svg";

const LoginPage = () => {
  return (
    <>
      <HomeNav color="black" buttonColor="#B2FFB2" logo={logo} />
      <LoginForm />
      <HomeFooterNav />
    </>
  );
};

export default LoginPage;
