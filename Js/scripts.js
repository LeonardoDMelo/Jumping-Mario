const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
let ponto = 0;

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() =>{
    mario.classList.remove('jump');
    ponto += 1;
    if(ponto <= 9){
    score.innerHTML ='0'+ponto;
    }
    else{
        score.innerHTML = ponto;
    }

    },500);
    //pontos.innerHTML +=1;

        console.log(ponto); 
}
const loop = setInterval(()=>{ 
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');


 
if (pipePosition <= 120 && marioPosition < 100 && pipePosition > 0 ) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`; 
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = '/Imgs/game-over.png'
    mario.style.width = '70px'
    mario.style.marginLeft = '50px'
    ponto-=1 

    clearInterval(loop);
}
},10);
//Pontuação
 
document.addEventListener('keydown',jump);
