
class Battlefield extends HTMLElement{
    constructor(complexity, background){
        super();
        this.complexity = complexity;
        this.background = background;
        this.size = this.complexity.x * this.complexity.y;                          
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
        values = [...values, ...values];
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

    animate(options) {

        var start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          // timeFraction от 0 до 1
          var timeFraction = (time - start) / options.duration;
          if (timeFraction > 1) timeFraction = 1;
      
          // текущее состояние анимации
          var progress = options.timing(timeFraction)
      
          options.draw(progress);
      
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
      
        });
      }

    addListeners(){        
        let pair = [];
        let left = this.size;
        this.addEventListener('click', (event) => {
            let element = event.target;
            if(element.classList.contains('battlefield__cell')){
                if(pair.length === 2
                || element == pair[0]
                || element.classList.contains('battlefield__cell_hidden')){
                    return;
                }

                pair.push(element);

                const index = element.dataset.index;
                const value = this.field[index];
                element.classList.add('battlefield__cell_open');
                setTimeout(() => {
                    element.style.backgroundImage = `url("./img/${this.background}/${value}.png")`; 
                }, 0.3);                               
                if(pair.length === 2){
                    const previousValue = this.field[pair[0].dataset.index];
                    if(value === previousValue){
                        left = left - 2;
                        if(left == 0){
                            this.dispatchEvent(new CustomEvent('finishGame', { detail: { score: this.size, won: true}, bubbles: true }));
                        }else{
                            this.animate({
                                duration: 600,
                                timing: function(timeFraction) {
                                  return timeFraction;
                                },
                                draw: function(progress) {                                    
                                    pair[0].style.opacity = 1 - progress;
                                    pair[1].style.opacity = 1 - progress;
                                }
                              });
                            setTimeout(() => {    
                                pair[0].classList.add('battlefield__cell_hidden');
                                pair[1].classList.add('battlefield__cell_hidden');                            
                                pair = []; 
                            }, 700);
                        }                        
                    }else{
                        element.classList.add('battlefield__cell_close');                        
                        setTimeout(() => {                            
                            pair[0].classList.remove('battlefield__cell_open', 'battlefield__cell_close');
                            pair[1].classList.remove('battlefield__cell_open', 'battlefield__cell_close');                                                                                 
                            setTimeout(() => {
                                pair[0].style.backgroundImage = '';
                                pair[1].style.backgroundImage = '';                            
                                pair = [];                      
                            }, 400);
                        }, 700);
                    }                                
                }                
            }
        });        
    }
}

export default Battlefield;
