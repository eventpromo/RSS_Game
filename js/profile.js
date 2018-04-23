import Http from './lib/http';
import Component from './lib/component';

class Profile extends Component{      
    constructor(){
        super("../templates/profile.html"); 
        this.data = {}; 
        
        this.loading = this.loading.then((html) => {
            this.saveButton = html.querySelector('.save-button');            
    
            this.addListeners();

            return html;
        });            
    }

    addListeners(){
        this.saveButton.addEventListener('click', function(event){
            event.preventDefault();
            let form = this.html.querySelector(".profile .form");
            this.data = {
                firstName: form.firstName,
                lastName: form.lastName, 
                email: form.email
            }
            this.save();                  
        });
    }   
    
    save(){
        window.localStorage['currentUser'] = this.data.email;
        window.localStorage[this.data.email] = JSON.stringify(this.data);
        document.dispatchEvent(new CustomEvent('profileSaved', { 'profile': this.data }));
    }    
}



export default Profile;