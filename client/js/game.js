import Http from './lib/http';
import Dashboard from './dashboard';
import Profile from './profile';

class Game{
    constructor(){
        this.dashboard = new Dashboard();
        this.Profile = new Profile();
        this.dashboard.load(this.Profile.element());
    }

    get element(){
        this.dashboard.element;
    }
}

export default Game;