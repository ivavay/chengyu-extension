(function(){
  
    // array of colors
    var color = [
      "#d1495b",
      "#edae49",
      "#003d5b", 
      "#00509d", 
      "#3a5a40", 
      "#1f7a8c", 
      "#588157", 
    ];
  
    // randomize function 
    function randomize(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    // loads the external json file 
    fetch('./data.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
    // work with JSON data here
    var random = randomize(data);
        
    // display the elements on the html
        document.getElementById('chengyu').innerHTML = random.chengyu;
        document.getElementById('definition').innerHTML = random.definition;
        document.getElementById('pingyin').innerHTML = random.pingyin;
    })
    .catch((err) => {
    // do something for an error here
    })
    //pick a random backgorund color 
    window.onload = function() {
      var randomColor = randomize(color);
      document.getElementsByTagName("body")[0].style.background = randomColor;
    };
  
  })();