function randomArrGenerate(arrs, indy){

    var randomArray = [];
    var finalArr = [];

    var count = 0;
    while(count < (arrs*indy)){
        randomArray.push(Math.ceil(Math.random()*100));
        count++;
    }

    //Sorting the random array
    randomArray.sort(function(a, b){return a-b;});
    console.log(randomArray);


  for(var i = 0; i < randomArray.length; i++){
    var newArr = [];


    //Need to modify this loop to run
    //maybe use a slice to move arrays around
    for(var j = 0; j < indy; j++){
        newArr.push(randomArray.shift());
    }

    finalArr.push(newArr);
    console.log(finalArr);
    }
  return finalArr;
}


randomArrGenerate(3,3);

