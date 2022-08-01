import _ from 'lodash';
import './style.css';
import loadHome from './home';
import loadMenu from './menu';

// document.body.appendChild(component());
const container = document.querySelector(".container")

const homeBtn = document.querySelector(".home-link")
const menuBtn = document.querySelector(".menu-link")

homeBtn.addEventListener("click", loadHome);

menuBtn.addEventListener("click", loadMenu);

loadMenu();
const startBtn = document.querySelector(".btn")

startBtn.addEventListener("click", loadMenu)
