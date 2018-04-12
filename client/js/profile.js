import Http from './lib/http';
import Block from './lib/block';

class Profile extends Block{      
    constructor(){
        super("../templates/profile.html");    
        this.newGameButton = html.querySelector('.button_new-game');
        this.ratingButton = html.querySelector('.button_rating');
        this.profileButton = html.querySelector('.button_profile');
        this.body = html.querySelector('.dashboard__body');
        
    }
    
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