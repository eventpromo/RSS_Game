class Setting extends HTMLElement {
    createdCallback(){  
        this.setAttribute('class', 'setting g-all-height');
        this.innerHTML = `<h1>Настройки игры</h2>
        <div class="setting__body">
            <div class="setting__block setting__block_complexity">
                <h2 class="setting__title">Сложность: </h2>
                <div class="setting__item setting__item_novice">                    
                    ${this.renderComplexityTable(3, 3)}                    
                </div>
                <div class="setting__item setting__item_advance">
                    ${this.renderComplexityTable(6, 6)}
                </div>
                <div class="setting__item setting__item_medium">
                    ${this.renderComplexityTable(5, 4)}
                </div>
            </div>
            <div class="setting__block setting__block_background">
                <h2 class="setting__title">Рубашка: </h2>
                <div class="setting__item setting__item_cars">                    
                </div>
                <div class="setting__item setting__item_footbal">                    
                </div>
                <div class="setting__item setting__item_got">                    
                </div>
            </div>
        </div>
        <div>
            <button class="setting__save-button button">Сохранить и играть</button>
        </div>`;
        this.saveButton = this.querySelector('.setting__save-button');
        this.addListeners();
    }  

    renderComplexityTable(rowNumber, colNumber){
        let table = document.createElement('table');
        table.classList.add('complexity');
        for(let i = 1; i <= rowNumber; i++){
            let tr = document.createElement('tr');
            for(let j = 1; j <= colNumber; j++){
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
        this.settingBody.addEventListener('click', function(event){                    
            if(event.target.classList.contains('setting__item')){                
                let items = event.target.parentElement.querySelectorAll('.setting__item');
                items.forEach(element => {
                    element.classList.remove('setting__item_selected');
                });       
                event.target.classList.add('setting__item_selected');
            }
        }, true);       

        this.saveButton.addEventListener('click', function(event){
            document.dispatchEvent(new CustomEvent('startClick', { 'base': event }));
        });       
    }
}

export default Setting;