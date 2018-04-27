
import Dashboard from './dashboard';
import Profile from './profile';
import Setting from './setting';
import Greeting from './greeting';
import Battlefield from './battlefield';

customElements.define('game-dashboard', Dashboard);
customElements.define('game-greeting', Greeting);
customElements.define('game-profile', Profile);
customElements.define('game-setting', Setting);
customElements.define('game-battlefield', Battlefield);

class Game extends HTMLElement {
    createdCallback() {
        this.dashboard = new Dashboard();
        this.greeting = new Greeting();   
        this.profile = new Profile();      
        this.setting = new Setting(); 
        this.dashboard.renderBody(this.greeting);
        this.timerId;
        this.appendChild(this.dashboard);
        this.addListeners();
    }    

    startTimer(minutes){        
        let seconds = minutes * 60;
        this.dashboard.timer.textContent = seconds.secondsToHhMmSs();
        this.timerId = setInterval(() => {
            seconds--;
            this.dashboard.timer.textContent = seconds.secondsToHhMmSs();          
        }, 1000);
                
        setTimeout(() => {
            clearInterval(this.timerId); 
            this.dispatchEvent(new CustomEvent('finishGame', { bubbles: true, detail: {
                won: false
            }}));  
        }, minutes * 60 * 1000);
    }    

    addListeners() {
        this.addEventListener('fillClick', function (event) {            
            this.dashboard.renderBody(this.profile);
        });

        this.addEventListener('newGame', function (event) {   
            if(this.profile.data){
                this.dashboard.renderBody(this.setting);    
            }else{
                this.dashboard.renderBody(this.profile);
            }            
        });        

        this.addEventListener('profileSaved', function (event) {                       
            this.dashboard.renderBody(this.setting);
        });

        this.addEventListener('settingSaved', function (event) {
            let battlefield = new Battlefield(event.detail.complexity, event.detail.background);
            this.dashboard.renderBody(battlefield);
            this.dispatchEvent(new CustomEvent('startGame', { bubbles: true }));           
        });        

        this.addEventListener('startGame', (event) => {            
            this.startTimer(2);
        }); 

        this.addEventListener('finishGame', (event) => {
            let title = document.createElement('h2');
            title.classList.add('title');  
            if(event.detail.won) {
                this.profile.data.scores.push({
                    date: new Date(), 
                    score: event.detail.score
                });
                this.profile.save();

                title.textContent = 'Вы выиграли!';
                clearInterval(this.timerId); 
            }else{
                title.textContent = 'Вы проиграли!';
            }         
            this.dashboard.renderBody(title);     
        });         
    }
}

export default Game;