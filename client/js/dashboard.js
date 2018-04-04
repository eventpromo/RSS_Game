import Http from './lib/http';

export default function(){
    let profileButton = document.querySelector('.profile-button');

    profileButton.onclick = function(){
        new Http().get("../templates/profile.html").then(function(response){
            debugger;
            document.querySelector('.dashboard .dashboard__body').innerHTML = response;
        });        
    };
}
