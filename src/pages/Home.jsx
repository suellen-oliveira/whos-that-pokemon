import styled from "styled-components";

const Home = () => {
  return (
    <MainHome>
      <Content>
        <Button>Começar</Button>
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

const Content = styled.section``;

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
