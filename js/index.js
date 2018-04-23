import Game from './game.js'

document.addEventListener("DOMContentLoaded", function(){
    let content = document.querySelector('.page .page__content');    
    let game = new Game();
    content.innerHTML = game.Dashboard.outerHTML;    
});