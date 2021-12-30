import styled from "styled-components";
import React from "react";

const RegisterTopBlock = styled.div`
  padding: 48px 40px 0;
  .register__top {
    display: flex;
    width: 970px;
    margin-left: auto;
    font-size: 20px;
    &__right {
      display: flex;
      margin-left: auto;
      font-size: 16px;
      strong {
        font-weight: bold;
      }
      .number {
        margin-left: 12px;
      }
      .number__right {
        margin-left: 4px;
      }
      .arrow {
        margin-left: 12px;
      }
    }
  }
`;

const RegisterTop = () => {
  return (
    <RegisterTopBlock>
      <div className="register__top">
        <div>회원가입</div>
        <div className="register__top__right">
          <div>
            <strong className="number">01</strong>
            <span className="number__right">약관동의</span>
            <strong className="arrow">&#62;</strong>
          </div>
          <div>
            <strong className="number">02</strong>
            <span className="number__right">정보입력</span>
            <strong className="arrow">&#62;</strong>
          </div>
          <div>
            <strong className="number">03</strong>
            <span className="number__right">가입완료</span>
          </div>
        </div>
      </div>
    </RegisterTopBlock>
  );
};

export default RegisterTop;
