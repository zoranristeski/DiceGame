// document.querySelector("h1").innerHTML="ZDRAVO";
console.log("connected");
var player1 = prompt("Insert player 1");
var player2 = prompt("Insert player 2");

document.querySelector("#player1").innerHTML=player1;
document.querySelector("#player2").innerHTML=player2;

function play()
{
  var randomNumber1 = Math.floor(Math.random() * 6)+1;
  //var p1dice=document.querySelector("#player1").innerHTML = Math.floor(Math.random() * 6)+1;
  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

  var randomNumber2 = Math.floor(Math.random() * 6)+1;
//  var p2dice=document.querySelector("#player2").innerHTML = Math.floor(Math.random() * 6)+1;
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1 > randomNumber2){
     document.querySelector("h1").innerHTML = "🚩 "+player1+" Wins";
  }else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = player2+" Wins 🚩";
  }else{
    document.querySelector("h1").innerHTML = "Draw";
  }
}
