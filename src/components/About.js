import React from "react";
import styled from "styled-components";
import Block from "./Block";
import { SiHtml5, SiJavascript, SiPython } from "react-icons/si";

const AboutWrapper = styled.div`
  display: flex;
`;

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 810px) {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: minmax(auto);
    grid-auto-flow: dense;
    grid-gap: 5px;
  }
`;

const Image = styled.div`
  width: 330px;
  height: 450px;
  border-radius: 16px;
  background-image: url("img/me.jpeg");
  background-position: center;
  background-size: cover;

  @media (min-width: 1300px) {
    width: 270px;
    height: 450px;
    border-radius: 16px;
    background-image: url("img/me.jpeg");
    background-position: center;
    background-size: cover;
    margin-left: -70px;
  }
`;

const GridWrapper = styled.div`
  margin: 30px auto;

  @media (min-width: 1300px) {
    margin-left: -70px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 350px);
  grid-auto-rows: minmax(auto);
  grid-auto-flow: dense;
  grid-gap: 5px;

  @media only screen and (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: minmax(auto);
    grid-auto-flow: dense;
    grid-gap: 5px;
  }
`;

const About = () => {
  return (
    <Block>
      <AboutWrapper>
        <AboutLayout>
          <Image />
          <GridWrapper>
            <h1>About Me</h1>
            <InfoGrid>
              <div>
                <h3>Achievement</h3>
                <p>2011.03 ~ 2014.02 &nbsp;&nbsp;중마고등학교</p>
                <p>2014.03 ~ 2021.02 &nbsp;&nbsp;부경대학교 컴퓨터공학과</p>
                <p>2021. 11 ~ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>wecode</p>
              </div>
              <div>
                <h3>Stack</h3>
                <p>
                  <SiHtml5 />
                  &nbsp;&nbsp;HTML/CSS
                </p>
                <p>
                  <SiJavascript />
                  &nbsp;&nbsp;Javascript
                </p>
                <p>
                  <SiPython />
                  &nbsp;&nbsp;Python3
                </p>
              </div>
              <div>
                <h3>Like</h3>
                <p>🎹 음악에 진심입니다</p>
                <p>🎮 게임을 매우 좋아합니다</p>
                <p>🚗 드라이빙을 즐깁니다</p>
              </div>
              <div>
                <h3>&nbsp;</h3>
                <p>위코더 여러분과 함께 성장하고 싶습니다!</p>
                <p>잘 부탁드립니다 🙏</p>
              </div>
            </InfoGrid>
          </GridWrapper>
        </AboutLayout>
      </AboutWrapper>
    </Block>
  );
};

export default About;
