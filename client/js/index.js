import Game from './game.js'

document.addEventListener("DOMContentLoaded", function(){
    let content = document.querySelector('.page .page__content');
    content.innerHTML = new Game().render();
});