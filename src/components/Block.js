import React from "react";
import styled from "styled-components";

const ContentBlock = styled.div`
  min-height: 500px;
  width: 90%;

  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  left: 50%;
  transform: translateX(-50%);

  margin: auto;
  margin-top: 70px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  font-family: Cafe24Oneprettynight;
  color: white;

  @media (min-width: 870px) {
    left: 50%;
    transform: translateX(-50%);

    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    display: flex;
    flex-direction: column;
    font-family: Cafe24Oneprettynight;
    color: white;
  }

  @media (min-width: 1300px) {
    min-height: 575px;

    left: 50%;
    transform: translateX(-50%);

    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    display: flex;
    flex-direction: column;
    font-family: Cafe24Oneprettynight;
    color: white;
  }
`;

const ContentsLayout = styled.div`
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;

  margin: 0 auto;
`;

const Block = ({ children }) => {
  return (
    <ContentBlock>
      <ContentsLayout>{children}</ContentsLayout>
    </ContentBlock>
  );
};

export default Block;
