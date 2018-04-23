import Http from './lib/http';
import Component from './lib/component';

class Setting extends Component {
    constructor(){
        super("../templates/setting.html");   

        this.loading = this.loading.then((html) => {
            this.addListeners();

            return html;
        });            
    }

    addListeners(){
        // this.startButton.addEventListener('click', function(event){
        //     document.dispatchEvent(new CustomEvent('startClick', { 'base': event }));
        // });       
    }
}

export default Setting;