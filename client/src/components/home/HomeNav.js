import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../../img/0dcefa870a310fe8e0f5434db0f95fcb_83387.svg";

const HomeNavBlock = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.color};
  color: ${(props) => props.showMenu && "black"};
  span:hover:not(.navRight__country, .navRight__cart, .navRight__cart
      span:nth-of-type(2)) {
    color: #c1272d;
  }
  .navLeft {
    font-size: 12px;
    display: flex;
    span {
      padding-right: 85px;
    }
  }
  ul {
    position: fixed;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    top: 0;
    left: 326px;
    //수정해야할 부분 1번
    margin-top: 30px;
    padding-top: 70px;
    padding-right: 100px;
    li {
      position: relative;
      display: inline-block;
      color: black;
      font-size: 12px;
      list-style: none;
      &:hover {
        color: #c1272d;
        .line {
          position: absolute;
          top: 0;
          left: -400px;
          background: black;
          width: 200vw;
          height: 1px;
        }
        .lineTwo {
          position: absolute;
          bottom: 0;
          left: -400px;
          background: black;
          width: 200vw;
          height: 1px;
        }
        &::before {
          content: "";
          position: absolute;
          width: 1px;
          height: 200vh;
          background: black;
          top: -400px;
          left: 0;
        }
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 200vh;
          background: black;
          top: -400px;
          right: 0;
        }
      }
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
        border: 1px solid ${(props) => (props.showMenu ? "black" : props.color)};
        border-radius: 6px;
        background: ${(props) => props.buttonColor};
        margin-right: 3px;
      }
      span:nth-of-type(2) {
        padding: 5px 9px;
        border: 1px solid ${(props) => props.color};
        border: 1px solid ${(props) => (props.showMenu ? "black" : props.color)};
        border-radius: 6px;
      }
    }

    &__cart {
      span:nth-of-type(2) {
        padding: 1px 4px;
        border: 1px solid ${(props) => props.color};
        border: 1px solid ${(props) => props.showMenu && "black"};
        border-radius: 4px;
        margin-left: 4px;
      }
    }
  }
`;

const WhiteGradient = styled.div`
  position: fixed;
  background: linear-gradient(to Bottom, white, transparent);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const HomeNav = ({ color, buttonColor, logo }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu && <WhiteGradient />}
      <HomeNavBlock color={color} buttonColor={buttonColor} showMenu={showMenu}>
        <div className="navLeft">
          <span>PROJECTS</span>
          <span>COLLECTIONS</span>
          <span
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            SHOP
          </span>
        </div>
        {showMenu && (
          <ul
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <li>
              <div className="line"></div>
              All
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              UNDERWEAR
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              KNITWEAR
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              T-SHIRT / TOP
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              SWEARSHIRTS
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              PANTS
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              OUTER
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              SHIRTS
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              BAG
              <div className="lineTwo"></div>
            </li>
            <li>
              <div className="line"></div>
              ACC
              <div className="lineTwo"></div>
            </li>
          </ul>
        )}
        <div className="logo">
          <Link to="/">
            <img src={showMenu ? logoBlack : logo} alt="로고" />
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
    </>
  );
};

export default HomeNav;
