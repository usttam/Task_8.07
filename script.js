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
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.querySelector('#btnLess').addEventListener('click',()=>{
    CheckValue (true);    
})

function GameStart (){
    minValue = parseInt(prompt('The minimum value of the number for the game','0')) || 0; 
    (minValue < -999) || (minValue > 998) ?  minValue = -999 :  minValue = minValue;
    maxValue = parseInt(prompt('The maximum value of the number for the game','100')) || 100;
    (maxValue > 999) || (maxValue < -998) ?  maxValue = 999 :  maxValue = maxValue;  
    alert(`Think of a number from ${minValue} to ${maxValue}, and i guess it`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    const answerText=TextAnswer (answerNumber);
    answerField.innerText = `You guessed the number is ${answerNumber }? \n (${answerText})`;
}

function CheckValue (isLess){  
           
    if (gameRun && typeof(isLess)==='boolean'){
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
            const phraseRandom = Math.round( Math.random()*2);                                
            (isLess)? maxValue = answerNumber  - 1 : minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const answerText= TextAnswer (answerNumber);
            switch (phraseRandom) {
                case 1:
                    answerPhrase = `And this number is ${answerNumber }? \n(${answerText})`; 
                    break;
                case 2:
                    answerPhrase = `Yes, it's easy! You made a guess ${answerNumber }? \n(${answerText})`; 
                    break;
                default: 
                    answerPhrase = `You guessed the number ${answerNumber }? \n(${answerText})`;
                    break;
            } 
            answerField.innerText = answerPhrase;
            
        }
    } else {
        console.log ('gameRun is False or isLess is not boolean');
    }
}
function TextAnswer (answerNumber){
    let remOfNumber1,remOfNumber2;   
    let hunrds,tens, ones;    
    let isMinus
    let textAnswer;
    if (Number.isInteger(answerNumber)) {
        if (answerNumber > 0) {                        
            isMinus = false;                   
        }
        if (answerNumber <0 ){
            answerNumber = answerNumber * (-1);
            isMinus=true;
        }
        if (answerNumber == 0) {
            return '????????';
        }   
         
        remOfNumber1 = answerNumber % 100;
        remOfNumber2 = answerNumber % 10;

     // debugger;
      

        if (remOfNumber1 == 0){
            switch (answerNumber) {
                case 900:
                    textAnswer = '??????????????????';                        
                    break;
                case 800:
                    textAnswer = '??????????????????';                        
                    break;
                case 700:
                    textAnswer = '??????????????';                        
                    break;
                case 600:
                    textAnswer = '????????????????';                        
                    break;
                case 500:
                    textAnswer = '??????????????';                        
                    break;
                case 400:
                    textAnswer = '??????????????????';                        
                    break;
                case 300:
                    textAnswer = '????????????';                        
                    break;
                case 200:
                    textAnswer = '????????????';                        
                    break;
                case 100:
                    textAnswer = '??????';                        
                    break;                   
            }
        }  else if (remOfNumber2 == 0 && answerNumber < 100){
                switch (answerNumber) {
                    case 90:
                        textAnswer ='??????????????????';                        
                        break;
                    case 80:
                        textAnswer ='??????????????????????';                          
                        break;
                    case 70:
                        textAnswer ='??????????????????';                   
                        break;
                    case 60:
                        textAnswer ='????????????????????';                 
                        break;
                    case 50:
                        textAnswer ='??????????????????';                      
                        break;
                    case 40:
                        textAnswer ='??????????';                      
                        break;
                    case 30:
                        textAnswer ='????????????????';                      
                        break;
                    case 20:
                        textAnswer ='????????????????';                    
                        break;
                    case 10:
                        textAnswer ='????????????';                     
                        break;                    
                }  
        }  else { 
            hunrds = Math.trunc(answerNumber / 100);
            tens =  Math.trunc(remOfNumber1 / 10);
            ones = remOfNumber2;
            console.log (hunrds,tens,ones);

            if (hunrds > 0) {
                switch (hunrds) {
                    case 0:
                    textAnswer = '';
                    break;
                    case 1:
                        textAnswer = '??????';
                        break;
                    case 2:
                        textAnswer = '????????????';
                        break;
                    case 3:
                        textAnswer = '????????????';
                        break;
                    case 4:
                        textAnswer = '??????????????????';
                        break;
                    case 5:
                        textAnswer = '??????????????';
                        break;
                    case 6:
                        textAnswer = '????????????????';
                        break;
                    case 7:
                        textAnswer = '??????????????';
                        break;
                    case 8:
                        textAnswer = '??????????????????';
                        break;
                    case 9:
                        textAnswer = '??????????????????';
                        break;                
                }
            } else {
                textAnswer = '';  
            }
           if (remOfNumber1 < 20 && remOfNumber1 > 9) {
                switch (remOfNumber1) {
                    case 10:
                        textAnswer = textAnswer + ' '+'????????????';
                        break;
                    case 11:
                        textAnswer = textAnswer + ' '+'??????????????????????';
                        break;
                    case 12:
                        textAnswer = textAnswer +' '+'????????????????????';
                        break;
                    case 13:
                        textAnswer = textAnswer +' '+'????????????????????';
                        break;
                    case 14:
                        textAnswer = textAnswer +' '+'????????????????????????';
                        break;
                    case 15:
                        textAnswer = textAnswer +' '+'????????????????????';
                        break;
                    case 16:
                        textAnswer = textAnswer +' '+'??????????????????????';
                        break;
                    case 17:
                        textAnswer = textAnswer +' '+'????????????????????';
                        break;
                    case 18:
                        textAnswer = textAnswer +' '+'????????????????????????';
                        break;
                    case 19:
                        textAnswer = textAnswer +' '+'????????????????????????';
                        break;                
                } 
           } else {
                switch (tens) {                    
                    case 1:
                        textAnswer = '';
                        break;
                    case 2:
                        textAnswer = textAnswer +' '+'????????????????';
                        break;
                    case 3:
                        textAnswer = textAnswer +' '+'????????????????';
                        break;
                    case 4:
                        textAnswer = textAnswer +' '+'??????????';
                        break;
                    case 5:
                        textAnswer = textAnswer +' '+'??????????????????';
                        break;
                    case 6:
                        textAnswer = textAnswer +' '+'????????????????????';
                        break;
                    case 7:
                        textAnswer = textAnswer +' '+'??????????????????';
                        break;
                    case 8:
                        textAnswer = textAnswer +' '+'??????????????????????';
                        break;
                    case 9:
                        textAnswer = textAnswer +' '+'??????????????????';
                        break;                
                }

                switch (ones) {
                    case 0:
                        textAnswer =  textAnswer + '';
                        break;
                    case 1:
                        textAnswer = textAnswer +' '+'????????';
                        break;
                    case 2:
                        textAnswer = textAnswer +' '+'??????';
                        break;
                    case 3:
                        textAnswer = textAnswer +' '+'??????';
                        break;
                    case 4:
                        textAnswer = textAnswer +' '+'????????????';
                        break;
                    case 5:
                        textAnswer = textAnswer +' '+'????????';
                        break;
                    case 6:
                        textAnswer = textAnswer +' '+'??????????';
                        break;
                    case 7:
                        textAnswer = textAnswer +' '+'????????';
                        break;
                    case 8:
                        textAnswer = textAnswer +' '+'????????????';
                        break;
                    case 9:
                        textAnswer = textAnswer +' '+'????????????';
                        break;                
                }
            }
           
        }
        console.log(textAnswer);
        if (isMinus){
            return '??????????' + ' ' + textAnswer;
        }
        else {
            return textAnswer;
        } 

    } else {
        console.log ('answerNumber is not integer');
    } 
    
}
