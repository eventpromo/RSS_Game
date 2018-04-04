export class Profile{
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    static create(firstName, lastName, email){
        return Profile(firstName, lastName, email);
    }

    save(){
        localStorage[this.email] = this;
    }    
}