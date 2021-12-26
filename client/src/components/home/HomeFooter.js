import styled from "styled-components";
import React from "react";
import footerChat from "../../img/file.png";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeFooterNav from "../common/HomeFooterNav";

const HomeFooterBlock = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  padding: 0 10px;

  .footerLeft {
    margin-bottom: 8px;
  }

  .footerMid {
    padding-left: 180px;
    span {
      margin-right: 40px;
    }
    svg {
      width: 15px;
      height: 15px;
    }
  }

  .footerRight {
    text-align: right;
    margin-bottom: 8px;

    &__top {
      span:nth-of-type(2) {
        margin-left: 10px;
      }
      span:nth-of-type(3) {
        margin-left: 10px;
      }
    }

    &__bottom {
      span:nth-of-type(2) {
        margin-left: 10px;
      }
    }
  }

  .footerChat {
    position: fixed;
    bottom: 45px;
    right: 60px;
    img {
      width: 90px;
      height: 70px;
    }
  }
`;

const HomeFooter = () => {
  return (
    <>
      <HomeFooterBlock>
        <div className="footerLeft">
          <p>3F, 19, JANGCHUNGDAN-RO 8NA-GIL, JUNG-GU, SEOUL</p>
          <p>2020@ 51PERCENT</p>
        </div>
        <div className="footerMid">
          <span>TERMS</span>
          <span>REFUND/EXCHANGE</span>
          <span>Q&#38;A</span>
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </div>
        <div className="footerRight">
          <div className="footerRight__top">
            <span>COMPANY 51PERCENT</span>
            <span>
              OWNER <span>이원재</span>
            </span>
            <span>BUSINESSLICENCE 756-30-00250</span>
          </div>
          <div className="footerRight__bottom">
            <span>ONLINEBUSINESS LICENCE 2020-서울중구-2215</span>
            <span>대표번호 +82&#40;0&#41;70 - 8828 - 8068</span>
          </div>
        </div>
        <div className="footerChat">
          <img src={footerChat} alt="상담 챗봇" />
        </div>
      </HomeFooterBlock>
      <HomeFooterNav />
    </>
  );
};

export default HomeFooter;
