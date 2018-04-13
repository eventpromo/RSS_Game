import Block from './lib/block';

class Dashboard extends Block{      
    constructor(){
        super("../templates/dashboard.html");
        
        this.loaded.then(() => {
            this.newGameButton = this.html.querySelector('#button_new-game');
            this.ratingButton = this.html.querySelector('#button_rating');
            this.profileButton = this.html.querySelector('#button_profile');
            this.body = this.html.querySelector('.dashboard__body'); 
    
            this.addListeners();
        });        
    }    
    
    loaded(){

    }

    load(elem){
        this.body.innerHtml = '';
        this.body.appendChild(elem);
    }

    addListeners(){
        this.newGameButton.addEventListener('click', function(){

        });

        this.profileButton.addEventListener('click', function(){
            
        });

        this.ratingButton.addEventListener('click', function(){
            
        });
    }
}

export default Dashboard;
