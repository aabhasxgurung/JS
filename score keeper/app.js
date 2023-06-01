const p1Button = document.querySelector('#p1Btn');
const p2Button = document.querySelector('#p2Btn');
const p1Dis = document.querySelector('#p1Dis')
const p2Dis = document.querySelector('#p2Dis')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function (){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true
        }
        p1Dis.textContent = p1Score;
    }
    
})

p2Button.addEventListener('click', function (){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true
        }
        p2Dis.textContent = p2Score;
    }
    
})
