console.log('hello world');

var getJoke = function() {
  fetch('http://api.icndb.com/jokes/random').then(function(res){
    return res.json();
  }).then(function(result){
    document.getElementById('joke').innerText = result.value.joke;
  });
};

getJoke();

document.getElementById('new_joke').addEventListener('click', function(e){
  getJoke();
});
