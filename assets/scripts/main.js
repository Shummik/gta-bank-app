'use strict';

let btnBack = document.querySelector('button.back');
let contentBlock = document.querySelectorAll('.block');
let nav = document.querySelector('#nav')
let navBtns = document.querySelectorAll('#nav button');

navBtns.forEach(item => {
  item.addEventListener('click', (e) => {
    openBlock(e.currentTarget.id);
    openStep(e.currentTarget.id, 1);
  });
});

function openBlock(id){
  contentBlock.forEach(item => {
    if (item.classList.contains(id)){
      item.classList.add('active');      
    }
    else{
      item.classList.remove('active');
    }    
  })
  toggleBackBtn();
}

function openStep(id, step){
  contentBlock.forEach(item => {
    if (item.classList.contains(id)){
      item.classList.add('active');
      for (let i = 0; i < item.children.length; i++) {
        if (item.children[i].classList.contains('step')){
          item.children[i].classList.remove('on');
          if (item.children[i].classList.contains('step_' + step)){
            item.children[i].classList.add('on');
          }
        }
      }
    }
    else{
      item.classList.remove('active');
    }    
  })
}

function toggleBackBtn() {
  if (nav.classList.contains('active')){
    btnBack.classList.add('hide');
  }
  else{
    btnBack.classList.remove('hide');
  }
}

function backToMenu(){
  contentBlock.forEach(item =>{
    if (!nav.classList.contains('active')){
      openBlock('main');
    }
  })
}