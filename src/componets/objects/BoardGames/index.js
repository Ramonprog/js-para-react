import '../BoardGames/style.css'
import CardGame from "../../cardgame";

const BoardGame = (amoultCard) => {
    const $htmlCardGame = CardGame();
    const $htmlContente = $htmlCardGame.repeat(amoultCard)
    return `
    <section class="board-game">
        ${$htmlContente}
    </section> `;
};
export default BoardGame;