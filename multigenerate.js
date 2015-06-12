//function randomArrGenerate(arrs, indy){

    var randomArray = [];

    var count = 0;
    while(count < 6){
        randomArray.push(Math.ceil(Math.random()*100))
        count++;
    }

    randomArray.sort(function(a, b){return a-b});

    var newArr


//}

  console.log(randomArray);