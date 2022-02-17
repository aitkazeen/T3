'use strict'
let counter = 0;
const clickable = document.querySelectorAll('.clickable');
clickable.forEach((item,i)=>{
    item.addEventListener('click', ()=>{
        if(i==0){
            if(counter/2){
                document.querySelector('.additional__info').classList.toggle('show');
            } else {
                document.querySelector('.additional__info').classList.toggle('show');
            }
        } else {
            if(counter/2){
                document.querySelector('.additional__info2').classList.toggle('show');
            } else {
                document.querySelector('.additional__info2').classList.toggle('show');
            }
        }

    });
});
