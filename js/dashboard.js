class Dashboard extends HTMLElement { 
    constructor(){
        super();
        this.createdCallback();
    }
    createdCallback(){        
        this.setAttribute('class', 'dashboard dashboard__content g-all-height');
        this.innerHTML = `<div class="header">
                <div class="header__game">
                    <button class="button button_new-game">Новая игра</button>
                </div>
                <div class="header_timer">
                    <div class="timer"></div>
                </div>
                <div class="header__user">
                    <button class="button button_profile">Профиль</button>
                    <button class="button button_rating">Результаты</button>
                </div>
            </div>
            <div class="dashboard__body"></div>`;            
        this.body = this.querySelector('.dashboard__body');
        this.timer = this.querySelector('.timer');
        this.addListeners();
    }  

    renderBody(element){       
        this.dispatchEvent(new CustomEvent('renderingBody', { bubbles: true }));           
        this.body.innerHTML = '';
        this.body.appendChild(element);        
        setTimeout(() => {
            this.dispatchEvent(new CustomEvent('renderedBody', { bubbles: true }));    
        }, 0);        
        return this.body;
    }

    addListeners(){
        this.newGameButton = this.querySelector('.button_new-game');
        this.newGameButton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('newGame', { bubbles: true }));
        });
        
        this.profileButton = this.querySelector('.button_profile');
        this.profileButton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('profileClick', { bubbles: true }));
        });

        this.ratingButton = this.querySelector('.button_rating');
        this.ratingButton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('ratingClick', { bubbles: true }));
        });         
    }
}

export default Dashboard;
