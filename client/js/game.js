
import Http from './lib/http';
import Dashboard from './dashboard';
import Profile from './profile';
import Setting from './setting';
import Start from './start';

class Game{
    constructor(){
        this.dashboard = new Dashboard();
        this.user = new Profile();
        this.start = new Start();
        this.setting = new Setting();
        this.loading = this.dashboard.upload(this.start);
        this.addListeners();
    }

    addListeners(){
        document.addEventListener('startClick', () => {
            this.dashboard.upload(this.profile);
        });  
        
        document.addEventListener('profileSaved', () => {
            this.dashboard.upload(this.setting);
        });  
    }

    load(){
        return this.loading;
    }
}

export default Game;