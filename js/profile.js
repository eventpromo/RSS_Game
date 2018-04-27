const CurrentUser = 'GameCurrentUser';

class Profile extends HTMLElement{ 
    constructor(){
        super(); 
        const data = window.localStorage[CurrentUser];            
        this.data = data ? JSON.parse(data) : {
            firstName: '',
            lastName: '', 
            email: '',
            scores: []         
        };
        this.createdCallback();
    }
    
    createdCallback(){  
        this.setAttribute('class', 'profile g-all-height');
        this.innerHTML = `<form class="profile__form form">
                <div class="input-block profile__input-block">
                    <label class="label">Имя:</label>
                    <input class="input" name="firstName" type="text" value="${this.data.firstName}" required>
                </div>
                <div class="input-block profile__input-block" >
                    <label class="label">Фамилия:</label>
                    <input class="input" name="lastName" type="text" value="${this.data.lastName}" required>
                </div>
                <div class="input-block profile__input-block">
                    <label class="label">Email:</label>
                    <input class="input" name="email" type="email" value="${this.data.email}" required>
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
            if(this.form.checkValidity())
            {
                event.preventDefault();  
                this.data.firstName = this.form.firstName.value;
                this.data.lastName = this.form.lastName.value;
                this.data.email = this.form.email.value;                   
                this.save();
                this.dispatchEvent(new CustomEvent('profileSaved', { detail: this.data, bubbles: true }));
            }                             
        });
    } 
    
    save(){
        window.localStorage[CurrentUser] = JSON.stringify(this.data); 
    }
}



export default Profile;