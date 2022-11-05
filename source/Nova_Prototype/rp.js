var btn = document.querySelector("button");
    var out = document.getElementById("output");
    
    
  
    btn.addEventListener("click", getWord);
   
    function getWord(){
     
       var theWord1= [
        'dog',
        'potato',
        'country',
        'parrot',
        'stone',
        'watch',
         'house',
         'biosphere',
        'brake',
        'salad',
        'trip',
        'hipopotomus',
        'mask',
        'chicken',
      ];

      
      var wordNum = Math.floor(Math.random() * theWord1.length);
      
      
        rp1.textContent = theWord1[wordNum];
      
        var theWord2= [
        'dog',
        'potato',
        'country',
        'parrot',
        'stone',
        'watch',
         'house',
         'biosphere',
        'brake',
        'salad',
        'trip',
        'hipopotomus',
        'mask',
        'chicken',
      ];

      
      var wordNum = Math.floor(Math.random() * theWord2.length);
      
      
        rp2.textContent = theWord2[wordNum];
        var theWord3= [
        'dog',
        'potato',
        'country',
        'parrot',
        'stone',
        'watch',
         'house',
         'biosphere',
        'brake',
        'salad',
        'trip',
        'hipopotomus',
        'mask',
        'chicken',
      ];

      
      var wordNum = Math.floor(Math.random() * theWord3.length);
      
      
        rp3.textContent = theWord3[wordNum];
        var theWord4= [
        'dog',
        'potato',
        'country',
        'parrot',
        'stone',
        'watch',
         'house',
         'biosphere',
        'brake',
        'salad',
        'trip',
        'hipopotomus',
        'mask',
        'chicken',
      ];

      
      var wordNum = Math.floor(Math.random() * theWord4.length);
      
      
        rp4.textContent = theWord4[wordNum];
        
    
    var theWord5= [
        'dog',
        'potato',
        'country',
        'parrot',
        'stone',
        'watch',
         'house',
         'biosphere',
        'brake',
        'salad',
        'trip',
        'hipopotomus',
        'mask',
        'chicken',
      ];

      
      var wordNum = Math.floor(Math.random() * theWord5.length);
      
      
        rp5.textContent = theWord5[wordNum];

    }
    
    function contiguos() {
      window.location.href="login.html";
      
    }

