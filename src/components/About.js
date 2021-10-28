import React from "react";
import styled from "styled-components";

const AboutLayout = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: minmax(auto);
    grid-auto-flow: dense;
    grid-gap: 5px;
    margin-left: 50px;
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

  @media (min-width: 850px) {
    width: 270px;
    height: 450px;
    border-radius: 16px;
    background-image: url("img/me.jpeg");
    background-position: center;
    background-size: cover;
  }
`;

const GridWrapper = styled.div`
  margin: 20px auto;
  @media (min-width: 850px) {
    margin: 20px 80px auto;
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
        <h1>소개</h1>
        <InfoGrid>
          <div>
            <h3>연혁</h3>
            <p>2011.03 ~ 2014.02 &nbsp;&nbsp;중마고등학교</p>
            <p>2014.03 ~ 2021.02 &nbsp;&nbsp;부경대학교 컴퓨터공학과</p>
            <p>2021. 11 ~ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wecode></p>
          </div>
          <div>
            <h3>연혁</h3>
            <p>2011.03 ~ 2014.02 중마고등학교</p>
          </div>
          <div>
            <h3>연혁</h3>
            <p>2011.03 ~ 2014.02 중마고등학교</p>
          </div>
          <div>
            <h3>연혁</h3>
            <p>2011.03 ~ 2014.02 중마고등학교</p>
          </div>
        </InfoGrid>
      </GridWrapper>
    </AboutLayout>
  );
};

export default About;
