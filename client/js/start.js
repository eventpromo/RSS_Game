import Http from './lib/http';
import Component from './lib/component';

class Start extends Component {
    constructor(){
        super("../templates/start.html");   

        this.loading = this.loading.then(() => {
            this.startButton = this.html.querySelector('.button_start"');
    
            this.addListeners();

            return this.startButton;
        });            
    }

    addListeners(){
        this.startButton.addListeners('click', function(){

        });       
    }
}

export default Start;