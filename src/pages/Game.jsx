import styled from "styled-components"
import Keyboard from "../components/Keyboard";
import Lives from "../components/Lives";

const Game = () => {
    return (
        <GameMain>
            <div>oi</div>
            <Divider>
                <Lives number='10'/>
                <Keyboard />
            </Divider>
        </GameMain>
    )
}

export default Game

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
`