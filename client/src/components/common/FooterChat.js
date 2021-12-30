import styled from "styled-components";
import React from "react";
import footerChat from "../../img/file.png";

const FooterChatBlock = styled.div`
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

const FooterChat = () => {
  return (
    <FooterChatBlock>
      <div className="footerChat">
        <img src={footerChat} alt="상담 챗봇" />
      </div>
    </FooterChatBlock>
  );
};

export default FooterChat;
