import styled from "styled-components";
import React from "react";

const RegisterWriteBlock = styled.div`
  width: 740px;
  margin: 0 auto;
  padding-top: 70px;
  select {
    padding: 7px;
    border: 1px solid #dbdbdb;
    font-size: 12px;
  }
  select:focus {
    outline: none;
  }
  > h1 {
    font-size: 20px;
  }
  input[type="checkbox"] {
    zoom: 1.4;
    margin-right: 4px;
    position: relative;
    top: 4.5px;
  }
  > p {
    font-size: 11px;
    text-align: right;
    color: #999999;
    margin-bottom: 4px;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-top: 1px solid black;
    input {
      font-size: 12px;
      padding: 8px;
      border: 1px solid #dbdbdb;
      &:focus {
        outline: none;
      }
    }
    .width350 {
      width: 350px;
    }
    .width250 {
      width: 250px;
      margin-right: 8px;
    }
    .width160 {
      width: 160px;
      margin-right: 8px;
    }
    .font12 {
      font-size: 12px;
    }
    tbody tr {
      border-bottom: 1px solid #dbdbdb;
    }
    tbody tr td:nth-of-type(1) {
      width: 160px;
      padding: 20px;
      font-size: 13px;
      background: #f9f9f9;
    }
    tbody tr td:nth-of-type(2) {
      padding: 8px 14px;
    }

    .address td:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      button {
        font-size: 12px;
        padding: 8px 14px;
        border: 1px solid #dbdbdb;
        background: #fcfcfc;
      }
      input {
        margin-bottom: 8px;
      }
    }
  }
  .registerButton {
    width: 100%;
    text-align: center;
    padding-top: 30px;
    button {
      width: 200px;
      padding: 10px;
      border: 1px solid black;
    }
    button:nth-of-type(2) {
      background: black;
      color: white;
      margin-bottom: 80px;
      margin-left: 10px;
    }
  }
`;

const RegisterWrite = () => {
  return (
    <RegisterWriteBlock>
      <h1>기본정보</h1>
      <p>*표시는 반드시 입력하셔야 하는 항목입니다.</p>
      <table className="registerWrite">
        <tbody>
          <tr>
            <td>
              <span>*</span> 아이디
            </td>
            <td>
              <input className="width350" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <span>*</span> 비밀번호
            </td>
            <td>
              <input className="width350" type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <span>*</span> 비밀번호 확인
            </td>
            <td>
              <input className="width350" type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <span>*</span> 이름
            </td>
            <td>
              <input className="width350" type="text" />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <div>
                <input className="width250" type="text" />
                <select>
                  <option>naver.com</option>
                  <option>daum.net</option>
                  <option>hanmail.net</option>
                </select>
              </div>
              <div>
                <input type="checkbox" />
                <span className="font12">
                  정보/이벤트 메일 수신에 동의합니다.
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>휴대폰번호</td>
            <td>
              <div>
                <input placeholder="- 없이 입력하세요." type="password" />
              </div>
              <div>
                <input type="checkbox" />
                <span className="font12">
                  정보/이벤트 메일 수신에 동의합니다.
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input placeholder="- 없이 입력하세요." type="password" />
            </td>
          </tr>
          <tr className="address">
            <td>주소</td>
            <td>
              <div>
                <input className="width160" type="text" />
                <button>우편번호검색</button>
              </div>
              <input className="width350" type="text" />
              <input className="width350" type="text" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="registerButton">
        <button>취소</button>
        <button>회원가입</button>
      </div>
    </RegisterWriteBlock>
  );
};

export default RegisterWrite;
