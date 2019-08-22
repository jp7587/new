var deck =[2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A',
2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A',
2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A',
2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A',
2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A',
2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'
,2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
var playerdeck = deck.slice();
var player1=[document.querySelector("#card11"),document.querySelector("#card12"),document.querySelector("#card13"),
document.querySelector("#card14"),document.querySelector("#card15"),document.querySelector("#card16"),
document.querySelector("#card17"),document.querySelector("#card18"),document.querySelector("#card19")];
var player2=[document.querySelector("#card21"),document.querySelector("#card22"),document.querySelector("#card23"),
document.querySelector("#card24"),document.querySelector("#card25"),document.querySelector("#card26"),
document.querySelector("#card27"),document.querySelector("#card28"),document.querySelector("#card29")];
var player3=[document.querySelector("#card31"),document.querySelector("#card32"),document.querySelector("#card33"),
document.querySelector("#card34"),document.querySelector("#card35"),document.querySelector("#card36"),
document.querySelector("#card37"),document.querySelector("#card38"),document.querySelector("#card39")];
var player4=[document.querySelector("#card41"),document.querySelector("#card42"),document.querySelector("#card43"),
document.querySelector("#card44"),document.querySelector("#card45"),document.querySelector("#card46"),
document.querySelector("#card47"),document.querySelector("#card48"),document.querySelector("#card49")];
var player5=[document.querySelector("#card51"),document.querySelector("#card52"),document.querySelector("#card53"),
document.querySelector("#card54"),document.querySelector("#card55"),document.querySelector("#card56"),
document.querySelector("#card57"),document.querySelector("#card58"),document.querySelector("#card59")];
var player6=[document.querySelector("#card61"),document.querySelector("#card62"),document.querySelector("#card63"),
document.querySelector("#card64"),document.querySelector("#card65"),document.querySelector("#card66"),
document.querySelector("#card67"),document.querySelector("#card68"),document.querySelector("#card69")];
var player7=[document.querySelector("#card71"),document.querySelector("#card72"),document.querySelector("#card73"),
document.querySelector("#card74"),document.querySelector("#card75"),document.querySelector("#card76"),
document.querySelector("#card77"),document.querySelector("#card78"),document.querySelector("#card79")];
var player8=[document.querySelector("#card81"),document.querySelector("#card82"),document.querySelector("#card83"),
document.querySelector("#card84"),document.querySelector("#card85"),document.querySelector("#card86"),
document.querySelector("#card87"),document.querySelector("#card88"),document.querySelector("#card89")];
var players =[player1,player2,player3,player4,player5,player6,player7,player8];
var player11= document.getElementById("player11");
var player12= document.getElementById("player12");
var player13= document.getElementById("player13");
var player14= document.getElementById("player14");
var player15= document.getElementById("player15");
var player16= document.getElementById("player16");
var player17= document.getElementById("player17");
var whoplays=[player11,player12,player13,player14,player15,player16,player17];
var cardCount= 0;
var numplayers=0;
var number=0;
var cardnumber=2;
var nums=0;
function deckss(){
  var cards=playerdeck.length/52;
  document.querySelector("#deckcount").innerHTML=cards.toFixed(0);
  return cards.toFixed(0);
}
function cardtrue(){
  var gee=deckss();
  var num= cardCount/gee;
  document.querySelector("#runningcount").innerHTML=num.toFixed(2);
}
function shuffle(){
  for(i=0;i<playerdeck.length;i++){
    var place = Math.floor((Math.random()*playerdeck.length));
    var num = playerdeck[i];
    playerdeck[i]=playerdeck[place];
    playerdeck[place]=num;
  }
}
function Count(num){
  if(num==2||num==3||num==4||num==5||num==6){
    cardCount+=1;
    cardtrue();
   document.querySelector("#score").innerHTML=cardCount;
  }
  else if(num==10||num=='J'||num=='Q'||num=='K'||num=='A'){
    cardtrue();
    cardCount-=1;
    document.querySelector("#score").innerHTML=cardCount;
  }
}
function takeCard(){
  if(playerdeck.length==0)
    playerdeck = deck.slice();
  var num=playerdeck[0];
  deckss();
  Count(num);
  playerdeck.splice(0,1);
  return num;
}
function color(){
  whoplays[nums].style.color="red";
}
function nocolor(){
  if(nums>=1)
  whoplays[nums-1].style.color="black";
}
function deal(){
  resetall();
  color();
  num=0;
  for(i=0;i<numplayers;i++){
    for(j=0;j<9;j++){
      players[i][j].innerHTML= '0';
      players[i][j].style.display='none';
    }
  }
  for(i=0;i<7;i++){
  players[7][i].innerHTML='0';
  players[7][i].style.display='none';
}
  for(i=0;i<numplayers;i++){
    players[i][0].innerHTML= takeCard();
    players[i][1].innerHTML= takeCard();
    players[i][0].style.display='run-in';
    players[i][1].style.display='run-in';
  }
  players[7][0].style.display='run-in';
  players[7][1].style.display='run-in';
  players[7][0].innerHTML= takeCard();
  players[7][1].innerHTML= takeCard();
  number=0;
  cardnumber=2;
  document.getElementById("selectplayer").disabled=true;
  document.getElementById("hit").disabled=false;
  document.getElementById("stand").disabled=false;
  document.getElementById("deal").disabled=true;
}
function hit(){
    players[number][cardnumber].innerHTML= takeCard();
      players[number][cardnumber].style.display='run-in';
    cardnumber++;
      color();
      nocolor();
    if(number==numplayers){
      cardnumber=2;
    dealer();
   }
    else if(add(players[number])>=21){
      nums++;
      number++;
      cardnumber=2;
      if(number==numplayers){
        cardnumber=2;
      dealer();
     }
    }
}
function stand(){
  cardnumber=2;
  color();
  nocolor();
  number++;
  nums++;
  if(number==numplayers){
  cardnumber=2;
    dealer();
  }
}
function add(player){
  var total=0;
  for(i=0;i<player.length;i++){
    var place=player[i].innerHTML;
    if(place=='J'||place=='Q'||place=='K')
    total+=10;
    if(place=='A')
    total+=11;
    if (place==2||place==3||place==4||place==5||place==6||place==7||place==8||place==9||place==10)
    total+=parseInt(place);
  }
  return total;
}
function dealer(){
  whoplays[nums-1].style.color="black";
  nums=0;
  while(add(player8)<17){
    number=7;
    players[7][cardnumber].innerHTML= takeCard();
    players[number][cardnumber].style.display='run-in';
    cardnumber++;
  }
  cardtrue();
  document.getElementById("selectplayer").disabled=false;
  document.getElementById("hit").disabled=true;
  document.getElementById("stand").disabled=true;
  document.getElementById("deal").disabled=false;
}
function resetall(){
  playerdeck=deck.slice();
  shuffle();
    for(i=numplayers;i<players.length-1;i++){
      for(j=0;j<7;j++){
        players[i][j].style.display='none';
        players[i][j].innerHTML= '0';
      }
    }
    number=0;
    cardnumber=2;
}
function selectplayers(){
    if(numplayers==1){
      player12.style.visibility='hidden';
      player13.style.visibility='hidden';
      player14.style.visibility='hidden';
      player15.style.visibility='hidden';
      player16.style.visibility='hidden';
      player17.style.visibility='hidden';
  }
  else if(numplayers==2){
      player12.style.visibility='visible';
      player13.style.visibility='hidden';
      player14.style.visibility='hidden';
      player15.style.visibility='hidden';
      player16.style.visibility='hidden';
      player17.style.visibility='hidden';
  }
  else if(numplayers==3){
      player12.style.visibility='visible';
      player13.style.visibility='visible';
      player14.style.visibility='hidden';
      player15.style.visibility='hidden';
      player16.style.visibility='hidden';
      player17.style.visibility='hidden';
  }
  else if(numplayers==4){
      player12.style.visibility='visible';
      player13.style.visibility='visible';
      player14.style.visibility='visible';
      player15.style.visibility='hidden';
      player16.style.visibility='hidden';
      player17.style.visibility='hidden';
  }
  else if(numplayers==5){
      player12.style.visibility='visible';
      player13.style.visibility='visible';
      player14.style.visibility='visible';
      player15.style.visibility='visible';
      player16.style.visibility='hidden';
      player17.style.visibility='hidden';
  }
  else if(numplayers==6){
      player12.style.visibility='visible';
      player13.style.visibility='visible';
      player14.style.visibility='visible';
      player15.style.visibility='visible';
      player16.style.visibility='visible';
      player17.style.visibility='hidden';
  }
  else if(numplayers==7){
      isclicked=true;
      player12.style.visibility='visible';
      player13.style.visibility='visible';
      player14.style.visibility='visible';
      player15.style.visibility='visible';
      player16.style.visibility='visible';
      player17.style.visibility='visible';
  }
}
document.getElementById('selectplayer').addEventListener('click',function(){
  document.querySelector('.popup').style.display='flex';
});
document.querySelector('.close').addEventListener('click',function(){
  document.querySelector('.popup').style.display='none';
});
document.querySelector('.buttonpop').addEventListener('click',function(){
  num = document.getElementById("drop").value;
  numplayers=num;
  document.getElementById("deal").disabled=false;
  document.querySelector('.popup').style.display='none';
  selectplayers();
  return numplayers;
});
shuffle();
document.getElementById("deal").disabled=true;
document.getElementById("hit").disabled=true;
document.getElementById("stand").disabled=true;

 // console.log(add(player2));
 // console.log(add(player3));
 // console.log(player4);
 // console.log(player5);
 // console.log(player6);
 // console.log(add(player7));
 // console.log(add(player8));
