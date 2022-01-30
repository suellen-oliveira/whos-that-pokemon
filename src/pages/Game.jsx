import { useEffect, useState } from "react";
import styled from "styled-components";
import Keyboard from "../components/Keyboard";
import Lives from "../components/Lives";
import { getPokemon } from "../api/pokeapi";

const Game = () => {
  const [idPokemon, setIdPokemon] = useState(0);
  const [namePokemon, setNamePokemon] = useState("");
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);

  useEffect(() => {
    if (!openModalSuccess) {
      let number = Math.floor(Math.random() * 151);
      number = number > 0 ? number : 1;
      setIdPokemon(number);

      if (number > 0) {
        getPokemon(number).then((data) => {
          if (data) {
            setNamePokemon(data.name)
          }
        });
      }
    }
  }, [openModalSuccess]);

  return (
    <GameMain>
      <div>
        <p>{namePokemon}</p>
      </div>
      <Divider>
        <Lives number="10" />
        <Keyboard />
      </Divider>
    </GameMain>
  );
};

export default Game;

const GameMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

const Divider = styled.div`
  background-color: var(--yellow);
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
