let minValue = 0;
let maxValue = 100;
let answerNumber  = 0;
let orderNumber = 0;
let gameRun = false;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

GameStart();

document.querySelector('#btnRetry').addEventListener('click',()=> {
    GameStart();
})

document.querySelector('#btnOver').addEventListener('click', ()=> {
    CheckValue (false);  
})

document.querySelector('#btnEqual').addEventListener('click', ()=> {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        let answerPhrase;
        switch (phraseRandom) {
            case 1:
                answerPhrase = `That's how I can do it!\n\u{1F61C}`; 
                break;
            case 2:
                answerPhrase = `Hooray! Guessed!\n\u{1F601}`; 
                break;
            default: 
                answerPhrase =`I always guess!\n\u{1F60E}`;
                break;
        } 
       // debugger;
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.querySelector('#btnLess').addEventListener('click',()=>{
    CheckValue (true);    
})

function GameStart (){
    minValue = parseInt(prompt('The minimum value of the number for the game','0'));
    maxValue = parseInt(prompt('The maximum value of the number for the game','100'));
    alert(`Think of a number from ${minValue} to ${maxValue}, and i guess it`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `You guessed the number is ${answerNumber }?`;
}

function CheckValue (isLess){           
    if (gameRun){
        let answerPhrase;
        if ((isLess && minValue === answerNumber) ||  minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);            
            switch (phraseRandom) {
                case 1:
                    answerPhrase = `Really, i don't know...\n\u{1F612}`; 
                    break;
                case 2:
                    answerPhrase = `I give up...\n\u{1F92F}`; 
                    break;
                default: 
                    answerPhrase = `You guessed the wrong number!\n\u{1F914}`;
                    break;
            } 
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {        
            //debugger;
            let phraseRandom = Math.round( Math.random()*2);                                
            (isLess)? maxValue = answerNumber  - 1 : minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            switch (phraseRandom) {
                case 1:
                    answerPhrase = `And this number is ${answerNumber }?`; 
                    break;
                case 2:
                    answerPhrase = `Yes, it's easy! You made a guess ${answerNumber }?`; 
                    break;
                default: 
                    answerPhrase = `You guessed the number ${answerNumber }?`;
                    break;
            } 
            answerField.innerText = answerPhrase;
        }
    } 
}
