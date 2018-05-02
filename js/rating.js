class Rating extends HTMLElement{
    constructor(scores){
        super();
        this.scores = scores;
        this.createdCallback();
    }

    createdCallback(){     
        let title = document.createElement('h2');
        title.classList.add('title');  
        title.textContent = 'Результаты:';
        this.appendChild(title);

        this.scores.sort(x => x.date).forEach(x => {
            let score = document.createElement('h3');
            score.textContent = `${x.date}: ${x.score}`;
            this.appendChild(score);
        });        
    }      
}

export default Rating;