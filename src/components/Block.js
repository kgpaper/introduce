import React from "react";
import styled from "styled-components";

const ContentBlock = styled.div`
  height: 500px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #f0eceb;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 70px;
  margin-bottom: 80px;
  margin-left: 100px;
  margin-right: 100px;

  display: flex;
  flex-direction: column;
`;

const ContentsLayout = styled.div`
  margin: 0 auto;
  padding-top: 50px;
`;

const Block = ({ children }) => {
  return (
    <ContentBlock>
      <ContentsLayout>{children}</ContentsLayout>
    </ContentBlock>
  );
};

export default Block;
