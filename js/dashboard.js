class Dashboard extends HTMLElement { 
    constructor(){
        super();
        this.createdCallback();
    }
    createdCallback(){        
        this.setAttribute('class', 'dashboard dashboard__content g-all-height');
        this.innerHTML = `<div class="header">
                <div class="header__game">
                    <button class="button button_new-game">New game</button>
                </div>
                <div class="header_logo">
                    <img class="logo">
                </div>
                <div class="header__user">
                    <button class="button button_profile">Profile</button>
                    <button class="button button_rating">Rating</button>
                </div>
            </div>
            <div class="dashboard__body"></div>`;
            
        this.body = this.querySelector('.dashboard__body');
        
        this.addListeners();
    }  

    renderBody(element){            
        this.body.innerHTML = '';
        this.body.appendChild(element);
        return this.body;
    }

    addListeners(){
        this.newGameButton = this.querySelector('.button_new-game');
        this.newGameButton.addEventListener('click', function(){

        });
        
        this.profileButton = this.querySelector('.button_profile');
        this.profileButton.addEventListener('click', function(){
            
        });

        this.ratingButton = this.querySelector('.button_rating');
        this.ratingButton.addEventListener('click', function(){
            
        });
    }
}

export default Dashboard;
