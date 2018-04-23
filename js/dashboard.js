// var DashboardProto = Object.create(HTMLElement.prototype);

// DashboardProto.createdCallback = function() {
//     var shadow = this.createShadowRoot(); 
//     shadow.innerHTML = `<div class="header">
//     <div class="header__game">
//         <button class="button button_new-game">New game</button>
//     </div>
//     <div class="header_logo">
//         <img class="logo">
//     </div>
//     <div class="header__user">
//         <button class="button button_profile">Profile</button>
//         <button class="button button_rating">Rating</button>
//     </div>
//     </div>`
//     shadow.appendChild(this.renderBody());
//   };

// DashboardProto.renderBody = function(element){    
//     if(!this.body){
//         this.body = document.createElement('div');
//         this.body.classList.add('.dashboard__body');
//     }
//     this.body.innerHTML = '';
//     this.body.appendChild(element);
//     return this.body;
// }

// // 2. Define a property read-only "bar".
// Object.defineProperty(DashboardProto, "bar", {value: 5});

// // 3. Register x-foo's definition.
// var XFoo = document.registerElement('x-foo', { prototype: DashboardProto });

class Dashboard extends HTMLElement{      
    constructor(){       
        
    } 

    createdCalback(){
        this.setAttribute('class', 'dashboard dashboard__content g-all-height');
        this.innerHTML = `<div class="header">
                <div class="header__game">
                    <button class="button button_new-game">New game</button>
                </div>
                <div class="header_logo">
                    <img class="logo">
                </div>
                <div class="header__user">
                    <button class="button button_profile">Profile</button>
                    <button class="button button_rating">Rating</button>
                </div>
            </div>`;
        this.appendChild(this.renderBody());
        this.addListeners();
    }  

    renderBody(element){    
        if(!this.body){
            this.body = document.createElement('div');
            this.body.classList.add('.dashboard__body');
        }
        this.body.innerHTML = '';
        this.body.appendChild(element);
        return this.body;
    }

    addListeners(){
        this.newGameButton = this.element.querySelector('.button_new-game');
        this.newGameButton.addEventListener('click', function(){

        });
        
        this.profileButton = this.element.querySelector('.button_profile');
        this.profileButton.addEventListener('click', function(){
            
        });

        this.ratingButton = this.element.querySelector('.button_rating');
        this.ratingButton.addEventListener('click', function(){
            
        });
    }
}

export default Dashboard;
