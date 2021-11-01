function renderPosts(boston, container) {
  const people = boston.data;
  people.sort(function (c1,c2){
    return c2[11]-c1[11]
  })
  people.splice(5,length)
  const len = boston.data.length;
  var topSalaryPeople=[];
  let html = '';
  for (let i = 0; i < len; i++) {
      if(people[i][11]>182000){
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
      }
  }
   // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
}
renderPosts(boston, document.getElementById('container'));