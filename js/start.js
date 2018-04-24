class Start extends HTMLElement{
    createdCallback(){  
        this.classList.add('start', 'g-all-height');
        this.innerHTML = ` <div class="greeting">
                Приветствую!
            </div>
            <div class="rules">
                <h2 class="title">Правила игры: </h2>
                <p class="rules__rule">Вы должны найти все пары карт за 2 минуты.</p>
                <p class="rules__rule">Для старта необходимо ввести пользовательские данные.</p>
            </div> 
            <div>
                <button class="button button_start">Заполнить данные</button>
            </div>`;
        this.addListeners();
    }  

    addListeners(){
        this.startButton = this.querySelector('.button_start');
        this.startButton.addEventListener('click', function(event){
            this.dispatchEvent(new CustomEvent('startClick', { bubbles: true, base: this.event }));
        });       
    }
}

export default Start;