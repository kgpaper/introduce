import React from "react";
import styled from "styled-components";
import { SiGithub, SiInstagram } from "react-icons/si";
import { VscMail } from "react-icons/vsc";
import Block from "./Block";

const ContactLayout = styled.div`
  margin: 0 auto;
  text-align: center;
  position: flex;

  h1 {
    font-size: 70px;
  }

  h3 {
    font-size: 24px;
  }
  p {
    font-size: 25px;
    margin-bottom: 10px;
    margin-right: 30px;
  }
  p:hover {
    color: #fff;
  }

  span {
    position: relative;
    color: #fff;
  }
  span::after {
    content: "";
    display: block;
    width: 0;
    height: 10px;
    position: absolute;
    left: 0;
    bottom: 0px;
    background: #38567d;
    opacity: 0.5;
  }
  p:hover span::after {
    width: 100%;
    transition: width 0.3s;
  }
`;

const LinkTrans = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <Block>
      <ContactLayout>
        <h1>Contact</h1>
        <h3>If you want to know more about me...</h3>

        <LinkTrans>
          <p>
            <span onClick={() => window.open("https://github.com/kgpaper", "_blank")}>
              <SiGithub /> kgpaper
            </span>
          </p>
          <p>
            <span>
              <VscMail /> sanha_ovo@kakao.com
            </span>
          </p>
          <p>
            <span onClick={() => window.open("https://www.instagram.com/life_of_sanha/", "_blank")}>
              <SiInstagram /> life_of_sanha
            </span>
          </p>
        </LinkTrans>
      </ContactLayout>
    </Block>
  );
};

export default Contact;
