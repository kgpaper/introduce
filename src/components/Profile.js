import React from "react";
import styled from "styled-components";

const CardTemplate = styled.div`
  height: 480px;

  position: flex;
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  color: white;
`;

const CardLayout = styled.div`
  diplay: flex;
  text-align: center;
  margin-left: 40px;
  margin-right: 40px;
;
  }
`;

const Circle1 = styled.div`
  width: 190px;
  height: 190px;
  border: 10px solid #38567d;
  border-radius: 50%;
  margin: 20px auto;
  position: relative;
`;

const Circle2 = styled.div`
  width: 180px;
  height: 180px;
  border: 7px solid #548ba1;
  border-radius: 50%;
  position: absolute;
  top: -2px;
  left: -2px;
  background-image: url("img/me2.jpeg");
  background-position: center;
  background-size: cover;
`;

const Profile = () => {
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
        <p>🎹 작곡하는 개발자</p>
      </CardLayout>
    </CardTemplate>
  );
};

export default Profile;
