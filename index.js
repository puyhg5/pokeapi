'use strict';

var menuButton = document.querySelector('.btn-menu');
var mobileMenu = document.querySelector('.nav-small');

menuButton.addEventListener('click', showOrHideMenu);

function showOrHideMenu() {
  mobileMenu.classList.toggle('nav-small-show');
}

var modal = document.querySelector('.info');
var buttonOpen = document.querySelector('btn-open');
var buttonClose = document.querySelector('h1');

function showProduct(event) {
  buttonOpen.innerHTML = event.target.innerHTML;
  modal.classList.add('modal-show');
}

modal.addEventListener ('click', showProduct);

function closeModal() {
  modal.classList.remove('modal-show');
}

buttonClose.addEventListener ('click', closeModal);
