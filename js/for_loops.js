"use strict"
function showMultiplicationTable(num){
    for (let i = 0; i <=10; i++){

        console.log(`${num} * ${i} = ${num * i}`);
        //console.log(num + 'x' + i + '=' + num*i) same thing as the console.log above
    }
}
showMultiplicationTable(7)




for(var i = 0; i < 10; i++){
    var randomNumber = Math.floor((Math.random()*(200 - 20) * 20;
    console.log(randomNumber);
    if (randomNumber % 2 === 0){
        console.log('even')
    }else {
        console.log(i + 'odd')

    }
}



for(var i = 0; i < 10; i++) {
    var str = "";
    for (var j = 0; j < i; j++){
        str = str + 1;

    }

    console.log(str);
    //or
    //for(let i = 1; i < 10; i++){
    //console.log(i.toString().repeat(i));
    //
}



for (var i = 100; i >= 5; i-= 5){
    console.log(i);
}





for(var i = 1; i < 11; i += 1) {
    console.log(i);
}

for(var i=100; i>=5; i=i-5) {
    console.log(i)
}