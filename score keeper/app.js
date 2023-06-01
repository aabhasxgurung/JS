const p1Button = document.querySelector('#p1Btn');
const p2Button = document.querySelector('#p2Btn');
const resetButton = document.querySelector('#reset')
const p1Dis = document.querySelector('#p1Dis')
const p2Dis = document.querySelector('#p2Dis')
const playTo = document.querySelector('#playto')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function (){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true
            p1Dis.classList.add('winner')
            p2Dis.classList.add('looser')
        }
        p1Dis.textContent = p1Score;
    }
    
})

p2Button.addEventListener('click', function (){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true
            p2Dis.classList.add('winner')
            p1Dis.classList.add('looser')
        }
        p2Dis.textContent = p2Score;
    }
    
})

playTo.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Dis.textContent = 0
    p2Dis.textContent = 0
    p1Dis.classList.remove('winner', 'looser')
    p2Dis.classList.remove('winner', 'looser')
}