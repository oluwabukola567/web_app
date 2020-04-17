//alert("you are logged in")
let min = 1,
    max = 10,
    guessnum = guessednum(min, max),
    guessleft = 3;

const overall = document.querySelector('#game');
const minnum = document.querySelector('.min-num')
const maxnum = document.querySelector(".max-num")
const guessbtn = document.querySelector("#check")
const guess = document.querySelector("#guessed")
const output = document.querySelector(".message")



minnum.textContent = min
maxnum.textContent = max

overall.addEventListener('mousedown',function(e){
 if( e.target.className === 'antrial'){
    window.location.reload();
 }
     
})


guessbtn.addEventListener('click',function(){
    let mini = parseInt(guess.value)
    if(isNaN(mini) || mini < min || mini > max){
        setMessage(`Please enter a number between the range of ${min} and ${max}`, 'red');
    }
    else if(mini === guessnum){
        winning(true,`${guessnum} Your guess is correct, therefore you won!!!!!`)
    }else{
        guessleft -= 1
    
 if(guessleft === 0){
    winning(false, `You have used up all your trials, therefore you lost. The correct 
    guess is ${guessnum}. Try again next time`)
}else{
    guess.value = ' '
    setMessage(`${mini} is not correct,try harder, ${guessleft} more guesss left `,'red')
}
    }

})




function setMessage(mess, color){
    output.style.color = color
    output.textContent = mess
    
}

function winning(win, mess){
    let color
    win === true ? color = 'green' : color = 'red'
    guess.style.borderColor = color;
    guess.disabled = true;
    output.style.color = color
    setMessage(mess)
    guessbtn.value = 'PLAY AGAIN'
    guessbtn.className += 'antrial'

}
function guessednum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)

}