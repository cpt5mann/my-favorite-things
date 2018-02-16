var btn1= document.getElementById("button1");
var btn2= document.getElementById("button2");
var btn3= document.getElementById("button3");
var response1=document.getElementById("response1");


var desserts=["Milkshakes", "Brownies", "Fruit"];
var foods=["Tacos", "Burritos", "Musubis"];
var games=["Destiny 2", "Strat-o-Matic", "Madden"];

btn1.addEventListener("click", function(){

    response1.innerHTML=("Look in the console!");
    
var i;
for(var i=0; i<desserts.length; i++){
    console.log(desserts[i]);
}
});

btn2.addEventListener("click", function(){

    response1.innerHTML=("Look in the console!");
    
var i;
for(var i=0; i<foods.length; i++){
    console.log(foods[i]);
}
});

btn3.addEventListener("click", function(){

    response1.innerHTML=("Look in the console!");
    
var i;
for(var i=0; i<games.length; i++){
    console.log(games[i]);
}
});



