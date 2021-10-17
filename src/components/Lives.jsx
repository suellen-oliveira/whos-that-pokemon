import styled from "styled-components";
import HeartIcon from "../assets/icon-heart.png";

const Lives = ({ number }) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${HeartIcon})` }}>
      <LivesNumber>{number}</LivesNumber>
    </Wrapper>
  );
};

export default Lives;

const Wrapper = styled.div`
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 214px;
  width: 214px;
  height: 170px;
  margin: auto;
`;

const LivesNumber = styled.p`
  font-size: 80px;
  color: #fff;
`;
