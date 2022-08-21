import CardGame from "../../cardgame";

const BoardGame = (amoultCard) => {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amoultCard)
    return $htmlBoardGame;
};
export default BoardGame;