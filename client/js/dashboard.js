import Http from './lib/http';
import {init as profileInit} from './profile';

export default function(){
    let profileButton = document.querySelector('.profile-button');

    profileButton.addEventListener("click", function(){
        new Http().get("../templates/profile.html").then(function(response){            
            document.querySelector('.dashboard .dashboard__body').innerHTML = response;
            profileInit();
        });    
    });    
}
