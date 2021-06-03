(function(){
  
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
        var randomChengyu = randomize(data);
        
    // display the elements on the html
        document.getElementById('chengyu').innerHTML = randomChengyu.chengyu;
        document.getElementById('definition').innerHTML = randomChengyu.definition;
        document.getElementById('pingyin').innerHTML = randomChengyu.pingyin;
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