import loader from './modules/loader.js';
loader();

import fallingNav from './modules/falling-menu.js';
fallingNav();

import mobileNav from './modules/mobile-menu.js';
mobileNav();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  // Optional parameters
  vertical: false,
  loop: true,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.slider-controls__count',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderPrev',
    prevEl: '#sliderNext',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
