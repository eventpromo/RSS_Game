class Profile extends HTMLElement{ 
    constructor(){
        super();
        this.createdCallback();
    }
    
    createdCallback(){  
        this.setAttribute('class', 'profile g-all-height');
        this.innerHTML = `<form class="profile__form form">
                <div class="input-block profile__input-block">
                    <label class="label">Имя:</label>
                    <input class="input" name="firstName" type="text" required>
                </div>
                <div class="input-block profile__input-block" >
                    <label class="label">Фамилия:</label>
                    <input class="input" name="lastName" type="text" required>
                </div>
                <div class="input-block profile__input-block">
                    <label class="label">Email:</label>
                    <input class="input" name="email" type="email" required>
                </div>
                <div class="input-block profile__input-block">
                    <input type="submit" class="save-button button" value="Сохранить данные"></button>
                </div>
            </form>`;
        this.saveButton = this.querySelector('.save-button');
        this.form = this.querySelector(".form");
        this.addListeners();
    }  

    addListeners(){
        this.saveButton.addEventListener('click', (event) => {
            if(!this.form.checkValidity())
            {
                event.preventDefault();  
                this.data = {
                    firstName: this.form.firstName,
                    lastName: this.form.lastName, 
                    email: this.form.email
                }
                this.save();  
            }                             
        });
    }   
    
    save(){
        window.localStorage['currentUser'] = this.data.email;
        window.localStorage[this.data.email] = JSON.stringify(this.data);
        this.dispatchEvent(new CustomEvent('profileSaved', { detail: this.data, bubbles: true }));
    }    
}



export default Profile;