import _ from 'lodash';
import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

// document.body.appendChild(component());
const container = document.querySelector(".container")

const homeBtn = document.querySelector(".home-link")
const menuBtn = document.querySelector(".menu-link")
const aboutBtn = document.querySelector(".about-link")

homeBtn.addEventListener("click", loadHome);

menuBtn.addEventListener("click", loadMenu);

aboutBtn.addEventListener("click", loadAbout)

loadHome();

const startBtn = document.querySelector(".btn")

startBtn.addEventListener("click", loadMenu)
