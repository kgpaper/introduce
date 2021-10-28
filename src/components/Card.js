import React from "react";
import styled from "styled-components";

const CardTemplate = styled.div`
  height: 480px;

  position: relative;
  border-radius: 16px;

  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  padding-left: 26px;
  padding-right: 26px;

  color: white;
`;

const CardLayout = styled.div`
  margin: 20px auto;
  margin-left: 10px;
  margin-right: 10px;
  diplay: flex;
  text-align: center;
;
  }
`;

const Circle1 = styled.div`
  width: 200px;
  height: 200px;
  border: 10px solid #38567d;
  border-radius: 50%;
  margin: 20px auto;
  position: relative;
`;

const Circle2 = styled.div`
  width: 190px;
  height: 190px;
  border: 7px solid #548ba1;
  border-radius: 50%;
  position: absolute;
  top: -2px;
  left: -2px;
  background-image: url("img/me2.jpeg");
  background-position: center;
  background-size: cover;
`;

const Card = () => {
  return (
    <CardTemplate>
      <Circle1>
        <Circle2 class="small-circle"></Circle2>
      </Circle1>
      <CardLayout>
        <h1>길도연</h1>
        <h3>FE Developer</h3>
        <p>1995.06.29</p>
        <p>전남 광양 - 부산 대연 - 서울 신림</p>
      </CardLayout>
    </CardTemplate>
  );
};

export default Card;
