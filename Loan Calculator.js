$('h1').css('background','red')
const formt = document.getElementById('formm')
const clebtn = document.querySelector('#subt')
const cleb = document.querySelector('#inp')
/*
clebtn.addEventListener('click',runevent)
cleb.value = "   " 


function runevent(e){
    console.log(`event type:${e.type}`);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},50)`;
}
localStorage.setItem('keys','name')

*/
$(function(){
    var body = $('body');
    var backgrounds = new Array(
        'url(down.jfif)','url(downl.jpg)','url(downlo.jpg)','url(downloa.jpg)','url(download.jpg)'
    );
    var current = 0;
    function nextback(){
        body.css(
            'background',backgrounds[current = ++current % backgrounds.length]
        );
        setTimeout(nextback,3000);
    }
    setTimeout(nextback,3000);
    body.css('background',backgrounds[0]);
});

formt.addEventListener('submit', function(e){
    document.getElementById('out').style.display = "none"
    document.querySelector('.load').style.display = "block"
    setTimeout(calculateloan, 1000);


    e.preventDefault()
})


function calculateloan(e){
const lamoun = document.querySelector('#lamount');
const aninter = document.querySelector('#aninterest');
const yea = document.querySelector('#years');
const monthly = document.querySelector('#monpay');
const totalpaym = document.querySelector('#totalpay');
const totalinterest = document.querySelector('#totalinter');


const amount = parseFloat(lamoun.value);
const interest = parseFloat(aninter.value) / 100 / 12;
const year = parseFloat(yea.value) * 12;



 const principal = Math.pow(1 + interest , year);
 const month = (amount * principal * interest)/(principal - 1);
  if(isFinite(month)){
      monthly.value = month.toFixed(5)
      totalpaym.value = (month * year).toFixed(5)
      totalinterest.value = ((month * year)-amount).toFixed(5)

      document.getElementById('out').style.display = "block"
      document.querySelector('.load').style.display = "none"


  }else{
      yourerror("This is an error.Please,check your number!!!!")
  }

    
}



function yourerror(error){

    document.getElementById('out').style.display = "none";
    document.querySelector('.load').style.display = "none"


    const errdiv = document.createElement('div')
    const card = document.querySelector('.card')
    const heading = document.querySelector('h2')


    errdiv.className = "alert alert-danger"
    const erro = document.createTextNode(error);
    errdiv.appendChild(erro);
    card.insertBefore(errdiv, heading);
    
    setTimeout(clear, 1000)

}
function clear(){
    document.querySelector('.alert').remove();
}