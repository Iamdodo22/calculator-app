"use strict";

// variables
const resultDisplay = document.querySelector('.displayResult');
const keyDisplay = document.querySelector('.displayKeyValue');

const keys = Array.from(document.querySelectorAll('.grid div'));
const themeSwitchers = Array.from(document.querySelectorAll('.themeCon li'));
const themeColor = document.querySelector('.themeColor')

let theme = 0;
let transX = 0;

// functions
function themeSetting(theme, transX) {
    document.documentElement.style.setProperty('--key-color',`var(--key-color${theme})`); 
    document.documentElement.style.setProperty('--key-colorShadow',`var(--key-colorShadow${theme})`);
    document.documentElement.style.setProperty('--key-DR',`var(--key-DR${theme})`);
    document.documentElement.style.setProperty('--key-DR-shadow',`var(--key-DR-shadow${theme})`);
    document.documentElement.style.setProperty('--key-last',`var(--key-last${theme})`);
    document.documentElement.style.setProperty('--key-last-shadow',`var(--key-last-shadow${theme})`);
    document.documentElement.style.setProperty('--bg-mainBg',`var(--bg-mainBg${theme})`);
    document.documentElement.style.setProperty('--textColor',`var(--textColor${theme})`);
    document.documentElement.style.setProperty('--bg-keyBgToggle',`var(--bg-keyBgToggle${theme})`);
    document.documentElement.style.setProperty('--key-textColor',`var(--key-textColor${theme})`);
    document.documentElement.style.setProperty('--lastkey-color',`var(--lastkey-color${theme})`);
    document.documentElement.style.setProperty('--bg-screen',`var(--bg-screen${theme})`);
   
    themeColor.style.translate = `${transX}rem`; 
}

function init() {
    resultDisplay.textContent='';
    keyDisplay.textContent='';

    let myTheme = JSON.parse(localStorage.getItem('theme')) || 0;
    let transX =  JSON.parse(localStorage.getItem('transX')) || 0;

    themeSetting(myTheme,transX)
}

    function allValid(expression) {
        expression = expression.replace(/\b0[0-9]+\b/g, match => parseInt(match))
        const result = eval(expression);
        return result;
    }


function displayKeyValue() {
    try{
      if(this.dataset.key === 'delete')return keyDisplay.textContent = keyDisplay.textContent.slice(0,-1);
    
    if(this.dataset.key === '=')return resultDisplay.textContent = allValid(keyDisplay.textContent);
    keyDisplay.textContent += this.dataset.key;
    if(this.dataset.key === 'reset'){
        keyDisplay.textContent ='';
        resultDisplay.textContent ='';
    }  
    }
    catch(error){
        resultDisplay.textContent = 'ERROR !'
    }

}

function switchTheme(e) {
    if(e.target === themeSwitchers[0]){
      theme = 0; 
    transX = 0;
    } 
    if(e.target === themeSwitchers[1]){
       theme = 1;
       transX = 1.25; 
    } 
    if(e.target === themeSwitchers[2]){
      theme = 2;
      transX = 2.25; 
    } 

    localStorage.setItem('theme', JSON.stringify(theme));
    localStorage.setItem('transX', JSON.stringify(transX));
    themeSetting(theme, transX)
}

// event handler
window.addEventListener('DOMContentLoaded',init )

keys.forEach(function(key) {
    key.addEventListener('click', displayKeyValue)
})

themeSwitchers.forEach(function(theme) {
    theme.addEventListener('click', switchTheme)
})