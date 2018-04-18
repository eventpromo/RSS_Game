import Component from './lib/component';

class Dashboard extends Component{      
    constructor(){
        super("../templates/dashboard.html");
        this.loading = this.loading.then((html) => {
            this.newGameButton = html.querySelector('#button_new-game');
            this.ratingButton = html.querySelector('#button_rating');
            this.profileButton = html.querySelector('#button_profile');
            this.body = html.querySelector('.dashboard__body'); 
    
            this.addListeners();

            return this.body;
        });        
    } 
    
    async upload(elem){
        let body = await this.loading;
        body.appendChild(elem);
        return this.html;
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
