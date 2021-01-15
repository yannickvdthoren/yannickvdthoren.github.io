import createList from './partials/postList.js';

window.onload = function(){
  if (window.location.pathname == "/"){
    createList();
  };
};
