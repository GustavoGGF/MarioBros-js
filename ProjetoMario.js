const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        
        mario.classList.remove('jump')

    }, 850);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = cloud.offsetLeft;

    if (pipePosition <= 110 &&pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`

        mario.src = './ProjetoMario_Imagens/gameover.png';
        mario.style.marinleft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump)


