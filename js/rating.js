class Rating extends HTMLElement{
    constructor(scores){
        super();
        this.scores = scores;
        this.createdCallback();
    }

    createdCallback(){     
        this.scores.sort(x => x.date).forEach(x => {
            let score = document.createElement('h2');
            score.textContent = x.score;
            this.appendChild(score);
        });        
    }      
}

export default Rating;