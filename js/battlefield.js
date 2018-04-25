
class Battlefield extends HTMLElement{
    constructor(complexity, background){
        super();
        this.complexity = complexity;
        this.background = background;
        this.number = this.complexity === 'novice' ? 9 : this.complexity === 'medium' ? 18 : this.complexity === 'advance' ? 36 : 0;
        this.createdCallback();
    }

    createdCallback(){          
        this.setAttribute('class', `battlefield battlefield_${this.complexity} battlefield__content g-all-height`);
        for(let i = 0; i < this.number; i++){
            let element  = document.createElement('div');
            element.setAttribute('class', `battlefield__cell battlefield__cell_${this.background}`);                             
            this.appendChild(element);
        }
        this.addListeners();
    }  

    addListeners(){        
          
    }
}

export default Battlefield;
