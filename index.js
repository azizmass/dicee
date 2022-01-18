
  var n1=Math.floor(Math.random()*6)+1;
  var n2=Math.floor(Math.random()*6)+1;
    var img=document.querySelectorAll("img");
  img[0].setAttribute("src","images/dice"+n1+".png");
  img[1].setAttribute("src","images/dice"+n2+".png");
  if(n1>n2) document.querySelector("h1").innerHTML="<h1 class='titel'><span style='font-size:8rem;'>&#128681;</span>Player 1 Wins!</h1> ";
else if(n1<n2) document.querySelector("h1").innerHTML="<h1 class='titel'>Player 2 Wins! <span style='font-size:8rem;'>&#128681;</span></h1> ";
else  document.querySelector("h1").innerHTML="<h1 class='titel'><span style='font-size:8rem;'>&#128681;</span>  Draw! <span style='font-size:8rem;'>&#128681;</span></h1> ";
