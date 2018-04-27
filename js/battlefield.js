
class Battlefield extends HTMLElement{
    constructor(complexity, background){
        super();
        this.complexity = complexity;
        this.background = background;
        this.size = this.complexity.x * this.complexity.y;
        this.previousClickedCell;  
        this.blocked = false;   
        this.left = this.size;
        this.fillIn();
        this.createdCallback();        
    }

    createdCallback(){          
        this.setAttribute('class', `battlefield battlefield__content g-all-height`);
        this.style = `grid-template: repeat(${this.complexity.y}, 1fr) / repeat(${this.complexity.x}, 1fr)`;
        for(let i = 0; i < this.size; i++){
            let element  = document.createElement('div');
            element.setAttribute('class', `battlefield__cell battlefield__cell_${this.background}`); 
            element.dataset.index = i;                            
            this.appendChild(element);
        }
        this.addListeners();
    }  

    fillIn(){
        this.field = new Array(this.size).fill(0);
        let values = Array.randomInt(this.size / 2, 1, 10);
        values = values.concat(values);
        values.forEach(element => {
            const emptyCells = this.field.map((x, i) => {
                return {
                    value: x,
                    index: i
                };
            }).filter(x => x.value === 0).map(x => x.index);            
            if(emptyCells.length){
                const index = emptyCells[Number.randomInt(0, emptyCells.length - 1)];
                this.field[index] = element;    
            }            
        });
    }

    addListeners(){
        this.addEventListener('click', (event) => {
            let element = event.target;
            if(element.classList.contains('battlefield__cell')){
                if(element.classList.contains('battlefield__cell_hidden') 
                || element.style.backgroundImage
                || this.blocked){
                    return;
                }
                const index = element.dataset.index;
                const value = this.field[index];
                element.style.backgroundImage = `url("./img/${this.background}/${value}.png")`;

                if(!this.previousClickedCell){
                    this.previousClickedCell = element;
                }
                else{
                    this.blocked = true;
                    const previousValue = this.field[this.previousClickedCell.dataset.index];
                    if(value === previousValue){
                        this.left = this.left - 2;
                        if(this.left == 0){
                            this.dispatchEvent(new CustomEvent('finishGame', { detail: { score: this.size, won: true}, bubbles: true }));
                        }else{
                            this.blocked = false;
                            setTimeout(() => {                                
                                element.classList.add('battlefield__cell_hidden');
                                this.previousClickedCell.classList.add('battlefield__cell_hidden');                            
                            }, 700);
                        }                        
                    }else{
                        setTimeout(() => {
                            this.blocked = false;
                            element.style.backgroundImage = '';
                            this.previousClickedCell.style.backgroundImage = '';
                            this.previousClickedCell = null;
                        }, 700);
                    }
                }                
            }
        });        
    }
}

export default Battlefield;
