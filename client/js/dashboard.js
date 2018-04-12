import Http from './lib/http';

class Dashboard extends Block{      
    constructor(){
        super("../templates/dashboard.html");
        
        this.newGameButton = this.html.querySelector('.button_new-game');
        this.ratingButton = this.html.querySelector('.button_rating');
        this.profileButton = this.html.querySelector('.button_profile');
        this.body = this.html.querySelector('.dashboard__body'); 

        this.addListeners();
      
        // let profileButton = document.querySelector('.profile-button');
    
        // profileButton.addEventListener("click", function(){
        //     new Http().get("../templates/profile.html").then(function(response){            
        //         document.querySelector('.dashboard .dashboard__body').innerHTML = response;
        //         profileInit();
        //     });    
        // });
    } 

    get element(){
        this.html;
    }

    load(elem){
        this.body.innerHtml = '';
        this.body.appendChild(elem);
    }

    addListeners(){
        this.newGameButton.addListeners('click', function(){

        });

        this.profileButton.addListeners('click', function(){
            
        });

        this.ratingButton.addListeners('click', function(){
            
        });
    }
}

export default Dashboard;
