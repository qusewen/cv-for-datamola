const SUMMARY = document.querySelector('.article__summary_subtitle-pre');
const SUMMARY_BTN = document.querySelector('.article__info-btn');


SUMMARY_BTN.addEventListener('click', ()=>{
    if(SUMMARY.style.display === 'block'){
        SUMMARY.style.display = 'none';
    }else{
        SUMMARY.style.display = 'block';
    }
})

