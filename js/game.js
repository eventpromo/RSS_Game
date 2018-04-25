
import Dashboard from './dashboard';
import Profile from './profile';
import Setting from './setting';
import Start from './start';
import Battlefield from './battlefield';

customElements.define('game-dashboard', Dashboard);
customElements.define('game-start', Start);
customElements.define('game-profile', Profile);
customElements.define('game-setting', Setting);
customElements.define('game-battlefield', Battlefield);

class Game extends HTMLElement {
    createdCallback() {
        this.dashboard = new Dashboard();
        this.start = new Start();          
        this.dashboard.renderBody(this.start);
        this.appendChild(this.dashboard);
        this.addListeners();
    }

    addListeners() {
        this.addEventListener('startClick', function (event) {
            this.profile = new Profile();
            this.dashboard.renderBody(this.profile);
        });

        this.addEventListener('profileSaved', function (event) {
            this.setting = new Setting();
            this.dashboard.renderBody(this.setting);
        });

        this.addEventListener('settingSaved', function (event) {
            this.battlefield = new Battlefield(event.detail.complexity, event.detail.background);
            this.dashboard.renderBody(this.battlefield);
        });
    }
}

export default Game;