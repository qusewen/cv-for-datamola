const SUMMARY = document.querySelector('.article__summary_subtitle-pre');
const SUMMARY_BTN = document.querySelector('.article__info-btn');
const BURGER_BTN = document.querySelector('.burger')
const BURGER_CONTENT = document.querySelector('.burger__content')
SUMMARY_BTN.addEventListener('click', ()=>{
    if(SUMMARY.style.display === 'block'){
        SUMMARY.style.display = 'none';
    }else{
        SUMMARY.style.display = 'block';
    }
})

BURGER_BTN.addEventListener('click',()=>{
    if(BURGER_CONTENT.style.display === 'block'){
        BURGER_CONTENT.classList.add('animatedclose');
        setTimeout(function(){
            BURGER_CONTENT.style.display = 'none';
            BURGER_CONTENT.classList.remove('animatedclose')
        }, 400)
        
    }else{
        BURGER_CONTENT.style.display = 'block';
        BURGER_CONTENT.classList.add('animatedopen')
        setTimeout(function(){
            BURGER_CONTENT.classList.remove('animatedopen')
        }, 500)
    } 
    
} )
