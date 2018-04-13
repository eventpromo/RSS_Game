import Http from './http';

class Block{
    constructor(template){                
        this.loaded = new Http().get(template).then((response) => {   
            var div = document.createElement('div');
            div.innerHTML = response;    
            this.html = div.firstChild;  
        });              
    }    

    get element(){
        this.html;
    }
}

export default Block;