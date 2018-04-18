import Http from './http';

class Component{
    constructor(template){                
        this.loaded = false;
        this.template - template;    
        this.loading = new Http().get(this.template).then((response) => {   
            var div = document.createElement('div');
            div.innerHTML = response;    
            this.html = div.firstChild;              
            this.loaded = true;

            return this.html;
        });
    }   

    async getElement(){        
        return await this.loading;
    }
}

export default Component;