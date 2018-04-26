
class Battlefield extends HTMLElement{
    constructor(complexity, background){
        super();
        this.complexity = complexity;
        this.background = background;
        this.number = this.complexity.x * this.complexity.y;
        this.field = [];
        this.createdCallback();        
    }

    createdCallback(){          
        this.setAttribute('class', `battlefield battlefield__content g-all-height`);
        this.style = `grid-template: repeat(${this.complexity.y}, 1fr) / repeat(${this.complexity.x}, 1fr)`;
        for(let i = 0; i < this.number; i++){
            let element  = document.createElement('div');
            element.setAttribute('class', `battlefield__cell battlefield__cell_${this.background}`);                             
            this.appendChild(element);
        }
        this.addListeners();
    }  

    fillIn(){
        //this.field
    }

    addListeners(){
        this.addEventListener('click', (event) => {
            if(event.target.classList.contains('battlefield__cell')){

            }
        });        
    }
}

export default Battlefield;
