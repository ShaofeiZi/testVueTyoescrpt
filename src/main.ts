import Vue from 'vue';
import EleUI from 'element-ui';
import { makeHot, reload } from './util/hot-reload'
import { createRouter } from './router'

const mainComponent = () => import('./components/main').then(({ MainComponent }) => MainComponent);
// const navbarComponent = () => import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent)
// const navbarComponent = () => import(/* webpackChunkName: 'navbar' */'./components/navbar').then(({ NavbarComponent }) => NavbarComponent)

import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const MainModuleId = './components/main';
  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(MainModuleId, mainComponent, module.hot.accept('./components/main', () => reload(MainModuleId, (require('./components/main')).MainComponent)))
}

new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'app-main': mainComponent
  }
});

Vue.use(EleUI);
