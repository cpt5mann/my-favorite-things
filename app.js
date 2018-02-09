var btn1= document.getElementById("button1");
var btn2= document.getElementById("button2");
var btn3= document.getElementById("button3");
var response1=document.getElementById("response1");

//  CHAGGGGER

var desserts=["Milkshakes", "Brownies", "Fruit"];
var foods=["Tacos", "Burritos", "Musubis"];
var games=["Destiny 2", "Destiny 1", "Madden"];

btn1.addEventListener("click", function(){

    response1.innerHTML=("Look in the console!");
    
var i;
for(i=0;i>3;i=i+1){
    console.log(desserts[i]);
}
});





