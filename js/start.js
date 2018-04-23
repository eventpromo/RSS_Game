class Start {
    constructor(){
        render();          
    }

    render(){
        this.element = document.createElement('div');
        this.element.classList.add('start', 'g-all-height');
        this.element.innerHTML = ` <div class="greeting">
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
        return this.element;
    }

    addListeners(){
        this.startButton.addEventListener('click', function(event){
            document.dispatchEvent(new CustomEvent('startClick', { 'base': this.event }));
        });       
    }
}

export default Start;