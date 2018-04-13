import Game from './game.js'

document.addEventListener("DOMContentLoaded", function(){
    let game = new Game();
    let content = document.querySelector('.page .page__content');
    content.innerHTML = game.elememnt.innerHTML;
});