import styled from "styled-components";
import { useHistory } from "react-router-dom";
import QuestionIcon from "../assets/icon-question.png";

const Home = () => {
  const history = useHistory();

  return (
    <MainHome>
      <Content>
        <Text>
          Quem é esse <span className="text">pokemon</span>
        </Text>
        <Icon src={QuestionIcon} />
        <Button onClick={() => history.push("/jogo")}>Começar</Button>
      </Content>
    </MainHome>
  );
};

export default Home;

const MainHome = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;
`;

const Text = styled.p`
  font-size: 54px;
  letter-spacing: 0.2em;
  color: var(--yellow);
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    margin-top: 30px;
    font-size: 80px;
    text-transform: uppercase;
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: var(--blue-400);
  }
`;

const Icon = styled.img`
  width: 65px;
  height: 87px;
`;

const Button = styled.button`
  background-color: var(--red);
  height: 50px;
  width: 270px;
  border-style: none;
  border-radius: 20px;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  &:hover {
    border: 2px solid #fff;
  }
`;
