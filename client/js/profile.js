import {settingInit} from './setting';

class Profile{
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    
    save(){
        localStorage['currentUser'] = this.email;
        localStorage[this.email] = JSON.stringify(this);
    }    
}

function init(){
    let profileButton = document.querySelector('.start-button');

    profileButton.onclick = function(event){
        event.preventDefault();
        let form = document.querySelector(".profile .form");
        let profile = new Profile(form.firstName, form.lastName, form.email);
        profile.save();
        new Http().get("../templates/setting.html").then(function(response){            
            document.querySelector('.dashboard .dashboard__body').innerHTML = response;
            settingInit();
        });                
    };
}

export default {
    init,
    Profile    
}