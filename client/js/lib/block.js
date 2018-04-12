import Http from './http';

class Block{
    constructor(template){
        new Http().get("../templates/dashboard.html", false).then((response) => {             
            this.html = document.createElement(response); 
        });             
    }
}