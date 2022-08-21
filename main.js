import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import BoardGame from './src/componets/objects/BoardGames';

const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6)


$root.insertAdjacentHTML('beforeend', $htmlBoardGame);