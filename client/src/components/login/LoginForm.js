import styled from "styled-components";
import React from "react";

const LoginFormBlock = styled.div`
  .login {
    width: 540px;
    margin: 0 auto;
    padding-top: 270px;
    padding-left: 20px;
    > h1:nth-of-type(1) {
      text-align: center;
      margin-bottom: 30px;
      font-size: 20px;
      width: 460px;
    }
    > h1:nth-of-type(2) {
      text-align: center;
      margin-bottom: 20px;
      font-size: 20px;
      width: 460px;
    }
    > p {
      font-size: 12px;
    }
    &__Form {
      display: flex;
      &__Left {
        display: flex;
        flex-direction: column;
        flex: 1;
        input {
          height: 30px;
          padding: 0 5px;
          margin-bottom: 5px;
          color: #8c8e90;
          font-size: 13px;
        }
        input:focus {
          outline: none;
        }
        input::placeholder {
          color: #8c8e90;
        }
      }
      &__Right {
        button {
          font-size: 12px;
          width: 75px;
          height: 64px;
          background: black;
          color: white;
          outline: none;
          margin-left: 5px;
        }
      }
    }
    &__Find {
      width: 440px;
      button {
        font-size: 12px;
        width: 32.66%;
        height: 30px;
        background: black;
        color: white;
        outline: none;
        margin-right: 4px;
      }
      button:nth-of-type(3) {
        margin: 0;
      }
    }
  }
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <div className="login">
        <h1>SIGN IN</h1>
        <h1>CURRENT CUSTOMER</h1>
        <p>*REQUIRED FIELD</p>
        <div className="login__Form">
          <div className="login__Form__Left">
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="PASSWORD" />
            <div className="login__Find">
              <button>REGISTER</button>
              <button>FIND ID</button>
              <button>FIND PASSWORD</button>
            </div>
          </div>
          <div className="login__Form__Right">
            <button>Login</button>
          </div>
        </div>
      </div>
    </LoginFormBlock>
  );
};

export default LoginForm;
