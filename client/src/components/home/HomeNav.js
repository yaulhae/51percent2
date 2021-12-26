import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const HomeNavBlock = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.color};
  .navLeft {
    font-size: 12px;
    span {
      margin-right: 85px;
    }
  }
  .logo {
    width: 80px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .navRight {
    font-size: 11px;
    > span {
      margin-left: 50px;
    }
    &__country {
      span:nth-of-type(1) {
        padding: 5px 9px;
        border: 1px solid ${(props) => props.color};
        border-radius: 6px;
        background: ${(props) => props.buttonColor};
        margin-right: 3px;
      }
      span:nth-of-type(2) {
        padding: 5px 9px;
        border: 1px solid ${(props) => props.color};
        border-radius: 6px;
      }
    }

    &__cart {
      span:nth-of-type(2) {
        padding: 1px 4px;
        border: 1px solid ${(props) => props.color};
        border-radius: 4px;
        margin-left: 4px;
      }
    }
  }
`;

const HomeNav = ({ color, buttonColor, logo }) => {
  return (
    <HomeNavBlock color={color} buttonColor={buttonColor}>
      <div className="navLeft">
        <span>PROJECTS</span>
        <span>COLLECTIONS</span>
        <span>SHOP</span>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </div>
      <div className="navRight">
        <span className="navRight__country">
          <span>KOREA</span>
          <span>OVERSEAS</span>
        </span>
        <span>SEARCH</span>
        <span>
          <Link to="/login">LOGIN</Link>
        </span>
        <span className="navRight__cart">
          <span>BAG</span>
          <span>0</span>
        </span>
      </div>
    </HomeNavBlock>
  );
};

export default HomeNav;
