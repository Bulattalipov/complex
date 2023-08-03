// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import validation from './modules/validation';
import openMenu from './modules/openMenu';
import contacts from './modules/contacts';
import engineering from './modules/engineering';
import swiper from './modules/swiper';
import filter from './modules/filter';
import tabs from './modules/tabs';
import moreText from './modules/moreText';
import sliderSelection from './modules/sliderSelection';
import file from './modules/file';
import projectContent from './modules/project-content';
import landing from './modules/landing';
import fancyboxFunc from './modules/fancybox-func';
import initSelects from './modules/initSelect';
// import customSelectControl from './modules/customSelectControl';

documenReady(() => {
  window.complex_api = {};

  lazyIMages();
  initModal();
  validation();
  openMenu();
  contacts();
  engineering();
  swiper();
  filter();
  tabs();
  moreText();
  sliderSelection();
  file();
  projectContent();
  landing();
  fancyboxFunc();
  initSelects();
  // customSelectControl();
});
