import React from "react";
import styled from "styled-components";

const HomeLayout = styled.div`
  margin: 0 auto;
`;

const Home = () => {
  return (
    <HomeLayout>
      <h1>홈</h1>
      <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
    </HomeLayout>
  );
};

export default Home;
