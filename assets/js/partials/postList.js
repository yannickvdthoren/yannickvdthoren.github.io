export default function createList(){
  var requestNum = '../../posts/posts.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestNum);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var data = request.response;
    var posts = data.posts.post;
    var postList = document.querySelector('.post__list');

    for(var i = 0; i < posts.length; i++){
      postList.innerHTML += '<li class="post__item">' +
        '<a href="'+ posts[i].link +'" class="post__link">' +
          '<h1 class="post__title">'+ posts[i].title +'</h1>' +
          '<p class="post__desc">'+ posts[i].desc +'</p>' +
          '<span class="post__btn btn">Read the article</span>' +
        '</a>' +
      '</li>';
    }
  }
}
