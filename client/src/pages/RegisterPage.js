import styled from "styled-components";
import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import HomeNav from "../components/home/HomeNav";
import HomeFooterNav from "../components/common/HomeFooterNav";
import logo from "../img/0dcefa870a310fe8e0f5434db0f95fcb_83387.svg";

const RegisterPage = () => {
  return (
    <>
      <HomeNav color="black" buttonColor="#B2FFB2" logo={logo} />
      <RegisterForm />
      <HomeFooterNav />
    </>
  );
};

export default RegisterPage;
