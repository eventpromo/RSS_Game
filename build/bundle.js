!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var s=class extends HTMLElement{createdCallback(){this.setAttribute("class","dashboard dashboard__content g-all-height"),this.innerHTML='<div class="header">\n                <div class="header__game">\n                    <button class="button button_new-game">New game</button>\n                </div>\n                <div class="header_logo">\n                    <img class="logo">\n                </div>\n                <div class="header__user">\n                    <button class="button button_profile">Profile</button>\n                    <button class="button button_rating">Rating</button>\n                </div>\n            </div>\n            <div class="dashboard__body"></div>',this.body=this.querySelector(".dashboard__body"),this.addListeners()}renderBody(t){return this.body.innerHTML="",this.body.appendChild(t),this.body}addListeners(){this.newGameButton=this.querySelector(".button_new-game"),this.newGameButton.addEventListener("click",function(){}),this.profileButton=this.querySelector(".button_profile"),this.profileButton.addEventListener("click",function(){}),this.ratingButton=this.querySelector(".button_rating"),this.ratingButton.addEventListener("click",function(){})}};var i=class extends HTMLElement{createdCallback(){this.setAttribute("class","profile g-all-height"),this.innerHTML='<form class="profile__form form">\n                <div class="input-block profile__input-block">\n                    <label class="label">Имя:</label>\n                    <input class="input" name="firstName" type="text" required>\n                </div>\n                <div class="input-block profile__input-block" >\n                    <label class="label">Фамилия:</label>\n                    <input class="input" name="lastName" type="text" required>\n                </div>\n                <div class="input-block profile__input-block">\n                    <label class="label">Email:</label>\n                    <input class="input" name="email" type="email" required>\n                </div>\n                <div class="input-block profile__input-block">\n                    <input type="submit" class="save-button button" value="Сохранить данные"></button>\n                </div>\n            </form>',this.saveButton=this.querySelector(".save-button"),this.form=this.querySelector(".form"),this.addListeners()}addListeners(){this.saveButton.addEventListener("click",t=>{this.form.checkValidity()||(t.preventDefault(),this.data={firstName:this.form.firstName,lastName:this.form.lastName,email:this.form.email},this.save())})}save(){window.localStorage.currentUser=this.data.email,window.localStorage[this.data.email]=JSON.stringify(this.data),this.dispatchEvent(new CustomEvent("profileSaved",{profile:this.data,bubbles:!0}))}};var a=class extends HTMLElement{createdCallback(){this.setAttribute("class","setting g-all-height"),this.innerHTML=`<h1>Настройки игры</h2>\n        <div class="setting__body">\n            <div class="setting__block setting__block_complexity">\n                <h2 class="setting__title">Сложность: </h2>\n                <div data-complexity="novice" class="setting__item setting__item_novice">                    \n                    ${this.renderComplexityTable(3,3)}                    \n                </div>\n                <div data-complexity="advance" class="setting__item setting__item_advance">\n                    ${this.renderComplexityTable(6,6)}\n                </div>\n                <div data-complexity="medium" class="setting__item setting__item_medium">\n                    ${this.renderComplexityTable(5,4)}\n                </div>\n            </div>\n            <div class="setting__block setting__block_background">\n                <h2 class="setting__title">Рубашка: </h2>\n                <div data-background="cars" class="setting__item setting__item_cars">                    \n                </div>\n                <div data-background="football" class="setting__item setting__item_football">                    \n                </div>\n                <div data-background="got" class="setting__item setting__item_got">                    \n                </div>\n            </div>\n        </div>\n        <div>\n            <button class="setting__save-button button">Сохранить и играть</button>\n        </div>`,this.saveButton=this.querySelector(".setting__save-button"),this.addListeners()}renderComplexityTable(t,e){let n=document.createElement("table");n.classList.add("complexity");for(let s=1;s<=t;s++){let t=document.createElement("tr");for(let n=1;n<=e;n++){let e=document.createElement("td");e.textContent=`${s} x ${n}`,t.appendChild(e)}n.appendChild(t)}return n.outerHTML}addListeners(){this.settingBody=this.querySelector(".setting__body"),this.settingBody.addEventListener("click",function(t){let e=t.target.classList.contains("setting__item")?t.target:t.target.closest(".setting__item");e&&(this.complexity=e.dataset.complexity?e.dataset.complexity:this.complexity,this.background=e.dataset.background?e.dataset.background:this.background,e.parentElement.querySelectorAll(".setting__item").forEach(t=>{t.classList.remove("setting__item_selected")}),e.classList.add("setting__item_selected"))}),this.saveButton.addEventListener("click",function(t){document.dispatchEvent(new CustomEvent("startClick",{base:t}))})}};var l=class extends HTMLElement{createdCallback(){this.classList.add("start","g-all-height"),this.innerHTML=' <div class="greeting">\n                Приветствую!\n            </div>\n            <div class="rules">\n                <h2 class="title">Правила игры: </h2>\n                <p class="rules__rule">Вы должны найти все пары карт за 2 минуты.</p>\n                <p class="rules__rule">Для старта необходимо ввести пользовательские данные.</p>\n            </div> \n            <div>\n                <button class="button button_start">Заполнить данные</button>\n            </div>',this.addListeners()}addListeners(){this.startButton=this.querySelector(".button_start"),this.startButton.addEventListener("click",function(t){this.dispatchEvent(new CustomEvent("startClick",{bubbles:!0,base:this.event}))})}};document.registerElement("game-dashboard",s),document.registerElement("game-start",l),document.registerElement("game-profile",i),document.registerElement("game-setting",a);var r=class extends HTMLElement{createdCallback(){this.dashboard=document.createElement("game-dashboard"),this.start=document.createElement("game-start"),this.profile=document.createElement("game-profile"),this.setting=document.createElement("game-setting"),this.dashboard.renderBody(this.start),this.appendChild(this.dashboard),this.addListeners()}addListeners(){this.addEventListener("startClick",function(t){this.dashboard.renderBody(this.profile)}),this.addEventListener("profileSaved",function(t){this.dashboard.renderBody(this.setting)})}};document.registerElement("match-game",r),document.addEventListener("DOMContentLoaded",function(){})}]);
//# sourceMappingURL=bundle.js.map