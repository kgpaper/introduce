import React from "react";
import styled from "styled-components";

const ContactLayout = styled.div`
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <ContactLayout>
      <h1>Contact</h1>
      <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
    </ContactLayout>
  );
};

export default Contact;
