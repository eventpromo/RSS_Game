import Http from './lib/http';
import Block from './lib/block';

class Start extends Block {
    constructor(){
        super("../templates/start.html");   

        this.startButton = this.html.querySelector('.button_start"');
    }

    addListeners(){
        this.startButton.addListeners('click', function(){

        });       
    }
}

export default Start;