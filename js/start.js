import Http from './lib/http';
import Component from './lib/component';

class Start extends Component {
    constructor(){
        super("../templates/start.html");   

        this.loading = this.loading.then((html) => {
            this.startButton = html.querySelector('.button_start');
    
            this.addListeners();

            return html;
        });            
    }

    addListeners(){
        this.startButton.addEventListener('click', function(event){
            document.dispatchEvent(new CustomEvent('startClick', { 'base': this.event }));
        });       
    }
}

export default Start;