import styled from "styled-components";
import PokeballIcon from "../assets/icon-pokebola.png";

const Keyboard = () => {
  const lettersFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const lettersSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const lettersThirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <KeyboardWrapper>
      <Letters>
        {lettersFirstRow.map((letter) => (
          <KeyboardButton key={letter}>{letter}</KeyboardButton>
        ))}
      </Letters>
      <Letters>
        {lettersSecondRow.map((letter) => (
          <KeyboardButton key={letter}>{letter}</KeyboardButton>
        ))}
      </Letters>
      <Letters>
        {lettersThirdRow.map((letter) => (
          <KeyboardButton key={letter}>{letter}</KeyboardButton>
        ))}
        <Pokeball>
          <img src={PokeballIcon} alt="" />
          <Chances>
            <p>3</p>
          </Chances>
        </Pokeball>
      </Letters>
    </KeyboardWrapper>
  );
};

export default Keyboard;

const KeyboardWrapper = styled.div`
  background-color: #fff;
  height: 274px;
  width: 70%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin: auto;
`;

const Letters = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
`;

const KeyboardButton = styled.button`
  border-style: none;
  background-color: unset;
  font-size: 54px;
  line-height: 78px;
  letter-spacing: 0.36em;
  color: #041258;
  cursor: pointer;
`;

const Pokeball = styled.button`
  height: 54px;
  width: 60px;
  background-color: #f0f0f3;
  border: none;
  border-radius: 5px;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);

  > img {
    height: 40px;
    width: 40px;
  }
`;

const Chances = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: var(--blue-800);
  position: absolute;
  right: 3px;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    color: var(--yellow);
    font-size: 16px;
  }
`;
