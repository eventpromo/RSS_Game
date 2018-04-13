import Http from './lib/http';
import Dashboard from './dashboard';
import Profile from './profile';
import Start from './start';

class Game{
    constructor(){
        this.dashboard = new Dashboard();
        this.profile = new Profile();
        this.dashboard.load(new Start().element);
    }

    get element(){
        this.dashboard.element;
    }
}

export default Game;