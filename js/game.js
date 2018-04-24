
import Dashboard from './dashboard';
import Profile from './profile';
import Setting from './setting';
import Start from './start';

document.registerElement('game-dashboard', Dashboard);
document.registerElement('game-start', Start);
document.registerElement('game-profile', Profile);
document.registerElement('game-setting', Setting);

class Game extends HTMLElement{
    createdCallback(){  
        this.dashboard = document.createElement('game-dashboard');
        this.start = document.createElement('game-start');     
        this.profile = document.createElement('game-profile');     
        this.setting = document.createElement('game-setting');  
        this.dashboard.renderBody(this.start);  
        this.appendChild(this.dashboard);
        this.addListeners();
    }  

    addListeners(){        
        this.addEventListener('startClick', function(event){
            this.dashboard.renderBody(this.profile);  
        });  
        
        this.addEventListener('profileSaved', function(event){
            this.dashboard.renderBody(this.setting);  
        }); 
    }
}

export default Game;