import React from "react";
import styled from "styled-components";

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: minmax(auto);
    grid-auto-flow: dense;
    grid-gap: 5px;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: minmax(auto);
    grid-auto-flow: dense;
    grid-gap: 5px;
    margin: 0 auto;
  }
`;

const Image = styled.div`
  width: 270px;
  height: 450px;
  border-radius: 16px;
  background-image: url("img/me.jpeg");
  background-position: center;
  background-size: cover;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 270px;
    height: 450px;
    border-radius: 16px;
    background-image: url("img/me.jpeg");
    background-position: center;
    background-size: cover;
    margin-left: -40px;
  }
`;

const GridWrapper = styled.div`
  margin: 30px auto;

  @media (min-width: 992px) {
    margin: 0 auto;
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
            <p>HTML/CSS</p>
            <p>Javascript</p>
            <p>Python3</p>
          </div>
          <div>
            <h3>Like</h3>
            <p>🎹 음악을 매우 좋아합니다</p>
            <p>🎮 게임을 매우 좋아합니다</p>
            <p>🚗 드라이빙을 매우 좋아합니다</p>
          </div>
          <div>
            <h3>&nbsp;</h3>
            <p>위코더 여러분과 함께 성장하고 싶습니다!</p>
          </div>
        </InfoGrid>
      </GridWrapper>
    </AboutLayout>
  );
};

export default About;
