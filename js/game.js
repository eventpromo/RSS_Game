
import Dashboard from './dashboard';
import Profile from './profile';
import Setting from './setting';
import Greeting from './greeting';
import Battlefield from './battlefield';
import Rating from './rating';

customElements.define('game-dashboard', Dashboard);
customElements.define('game-greeting', Greeting);
customElements.define('game-profile', Profile);
customElements.define('game-setting', Setting);
customElements.define('game-battlefield', Battlefield);
customElements.define('game-rating', Rating);

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
            this.endTimer();
            this.dispatchEvent(new CustomEvent('finishGame', { bubbles: true, detail: {
                won: false
            }}));  
        }, minutes * 60 * 1000);
    }       

    endTimer(){
        clearInterval(this.timerId);
        this.timerId = null;
        this.dashboard.timer.textContent = '';  
    }

    addListeners() {
        this.addEventListener('fillClick', function (event) {            
            this.dashboard.renderBody(this.profile);
        });

        this.addEventListener('profileClick', function (event) {            
            this.dashboard.renderBody(this.profile);
        });

        this.addEventListener('ratingClick', function (event) {            
            this.dashboard.renderBody(new Rating(this.profile.data.scores));
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

        this.addEventListener('renderingBody', (event) => {  
            if(this.timerId){
                this.endTimer(); 
                this.profile.data.scores.push({
                    date: new Date().toLocaleDateString("en-US"), 
                    score: 0
                });                     
            }            
        }); 

        this.addEventListener('finishGame', (event) => {
            let title = document.createElement('h2');
            title.classList.add('title');  
            let score = 0;
            if(event.detail.won) {                                
                score = event.detail.score;
                title.textContent = 'Вы выиграли!';
                clearInterval(this.timerId); 
            }else{               
                title.textContent = 'Вы проиграли!';
            }   
            this.profile.data.scores.push({
                date: new Date().toLocaleDateString("en-US"), 
                score: score
            });      
            this.dashboard.renderBody(title);     
        });         
    }
}

export default Game;