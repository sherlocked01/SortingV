burger = document.querySelector('.burger')
algosLeft = document.querySelector('.algos-left')
algosRight = document.querySelector('.algos-right')

burger.addEventListener('click', ()=>{
    algosLeft.classList.toggle('v-class-resp');
    algosRight.classList.toggle('v-class-resp');
    algosLeft.classList.toggle('header-h-resp');
    algosRight.classList.toggle('header-h-resp');
    
})