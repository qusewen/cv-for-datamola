const SUMMARY = document.querySelector('.article__summary_subtitle-pre');
const SUMMARY_BTN = document.querySelector('.article__info-btn');
const BURGER_BTN = document.querySelector('.burger')
const BURGER_CONTENT = document.querySelector('.header__nav')
const UP_BTN = document.querySelector('.up-button');
const DOWN_BTN = document.querySelector('.down-button');
const SIDEBAR = document.querySelector('.sidebar')
const NAV_ITEM = document.querySelectorAll('.header__nav_list-item')

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

console.log(SIDEBAR.style.transform)
let slideCount = 0;
UP_BTN.addEventListener('click', ()=>{
    if(slideCount === 0 || slideCount === 3){
        SIDEBAR.style.transform = 'translateY(-600px)'
        slideCount= -3;
    }else{
        SIDEBAR.style.transform += 'translateY(200px)'
        slideCount+=1
    }


});
DOWN_BTN.addEventListener('click', ()=>{
    slideCount+=-1
    if(slideCount === -4){
        slideCount =0
        SIDEBAR.style.transform = 'translateY(0)'
    }else{
        SIDEBAR.style.transform += 'translateY(-200px)'
    }
    

});

NAV_ITEM.forEach((e)=> {
e.addEventListener('click',()=>{
    
    if(BURGER_CONTENT.style.display === 'block'){
        BURGER_CONTENT.classList.add('animatedclose');
        setTimeout(function(){
            BURGER_CONTENT.style.display = 'none';
            BURGER_CONTENT.classList.remove('animatedclose')
        }, 400)
    }
} )
})

