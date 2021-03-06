class Setting extends HTMLElement {
    constructor(){
        super();
        this.createdCallback();
    }

    createdCallback(){  
        this.complexities = {
            novice: { x: 4, y : 3},
            medium: { x: 6, y : 4},
            advance: { x: 6, y : 6}
        };
        this.setAttribute('class', 'setting g-all-height');
        this.innerHTML = `<h1>Настройки игры</h2>
        <div class="setting__body">
            <div class="setting__block setting__block_complexity">
                <h2 class="setting__title">Сложность: </h2>
                <div data-complexity="novice" class="setting__item setting__item_novice">                    
                    ${this.renderComplexityTable(this.complexities.novice)}                    
                </div>
                <div data-complexity="advance" class="setting__item setting__item_advance">
                    ${this.renderComplexityTable(this.complexities.advance)}                    
                </div>
                <div data-complexity="medium" class="setting__item setting__item_medium">
                    ${this.renderComplexityTable(this.complexities.medium)}                    
                </div>
            </div>
            <div class="setting__block setting__block_background">
                <h2 class="setting__title">Рубашка: </h2>
                <div data-background="cars" class="setting__item setting__item_cars">                    
                </div>
                <div data-background="football" class="setting__item setting__item_football">                    
                </div>
                <div data-background="got" class="setting__item setting__item_got">                    
                </div>
            </div>
        </div>
        <div>
            <button class="setting__save-button button">Сохранить и играть</button>
        </div>`;
        this.saveButton = this.querySelector('.setting__save-button');
        this.addListeners();
    }  

    renderComplexityTable(complexity){
        let table = document.createElement('table');
        table.classList.add('complexity');
        for(let i = 1; i <= complexity.y; i++){
            let tr = document.createElement('tr');
            for(let j = 1; j <= complexity.x; j++){
                let td = document.createElement('td');
                td.textContent = `${i} x ${j}`;
                tr.appendChild(td);
            }  
            table.appendChild(tr);
        }        
        return table.outerHTML;
    }

    addListeners(){
        this.settingBody = this.querySelector('.setting__body');
        this.settingBody.addEventListener('click', (event) => { 
            let target = event.target.classList.contains('setting__item') ? event.target : event.target.closest('.setting__item');            
            if(target){   
                this.complexity = target.dataset.complexity ? target.dataset.complexity : this.complexity;
                this.background = target.dataset.background ? target.dataset.background : this.background;
                let items = target.parentElement.querySelectorAll('.setting__item');
                items.forEach(element => {
                    element.classList.remove('setting__item_selected');
                });       
                target.classList.add('setting__item_selected');
            }
        });       

        this.saveButton.addEventListener('click', (event) => {
            this.dispatchEvent(new CustomEvent('settingSaved', { 
                bubbles: true,
                detail: {
                    complexity: this.complexities[this.complexity], 
                    background: this.background 
                }                
            }));
        });       
    }
}

export default Setting;