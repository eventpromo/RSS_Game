import Http from './lib/http';
import Component from './lib/component';

class Profile extends Component{      
    constructor(){
        super("../templates/profile.html");   

        this.addListeners();        
    }

    addListeners(){
        // this.newGameButton.addEventListener('click', function(){

        // });

        // this.profileButton.addEventListener('click', function(){
            
        // });

        // this.ratingButton.addEventListener('click', function(){
            
        // });
    }

     // let profileButton = document.querySelector('.profile-button');
    
        // profileButton.addEventListener("click", function(){
        //     new Http().get("../templates/profile.html").then(function(response){            
        //         document.querySelector('.dashboard .dashboard__body').innerHTML = response;
        //         profileInit();
        //     });    
        // });
    
    // save(){
    //     localStorage['currentUser'] = this.email;
    //     localStorage[this.email] = JSON.stringify(this);
    // }    
}

// function init(){
//     let startButton = document.querySelector('.start-button');

//     startButton.addEventListener("click", function(event){
//         event.preventDefault();
//         let form = document.querySelector(".profile .form");
//         let profile = new Profile(form.firstName, form.lastName, form.email);
//         profile.save();
//         new Http().get("../templates/setting.html").then(function(response){            
//             document.querySelector('.dashboard .dashboard__body').innerHTML = response;
//             settingInit();
//         });            
//     });   
// }

export default Profile;