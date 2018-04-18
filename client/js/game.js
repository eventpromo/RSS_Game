import Http from './lib/http';
import Dashboard from './dashboard';
import Profile from './profile';
import Start from './start';

class Game{
    constructor(){
        this.dashboard = new Dashboard();
        this.profile = new Profile();
        new Start().getElement().then((element) => {
            this.dashboard.upload(element);
        });        
    }

    async load(){
        return await this.dashboard.getElement();
    }
}

export default Game;