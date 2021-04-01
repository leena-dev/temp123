var disableAllSuitcases=false;
var showWinningMessage=false;
var choiceMade=false;
var back, backImg;
var banker ,bankerImg ,player;
var no_deal, deal, phone, col;
var no_dealImg, dealImg, phoneImg, colImg;
var song, callRing;
var suitcaseSelected=false;
var selectedSuitcase=-1;
var openedSuitcases="";
var shuffledAmountsArray = [];
var arr = [
  1,
  10,
  50,
  100,
  500,
  750,
  1000,
  5000,
  7000,
  10000,
  15000,
  20000

];

function preload(){
selectedSuitcaseImg=loadImage("selected.jpg");
openedSuitcase = loadImage("box_open.png")
unOpenedSuitcase = loadImage("box_close.png");
amtBox=loadImage("col.png");
backImg = loadImage("back_4.jpg")
phoneImg = loadImage("phone.png")
no_dealImg = loadImage("no_deal.png")
dealImg = loadImage("deal.png")
//box2Img = loadImage("box_close.png")
//colImg = loadImage("col.png")
bankerImg = loadImage("banker.png")
song = loadSound("backmusic.mp3")
}

function setup() {
  createCanvas(windowWidth-2,windowHeight-2);
  
  shuffledAmountsArray = shuffle(arr); 
  console.log(arr);
  console.log(shuffledAmountsArray);
  console.log(openedSuitcases);
  b1 = createSprite(400,100,10,10)
  b1.addImage(unOpenedSuitcase);
  b1.scale=0.11;
  b2 = createSprite(600,100,10,10)
  b2.addImage(unOpenedSuitcase);
  b2.scale=0.1;
  b3 = createSprite(800,100,10,10)
  b3.addImage(unOpenedSuitcase);
  b3.scale=0.1;
  b4 = createSprite(1000,100,10,10)
  b4.addImage(unOpenedSuitcase);
  b4.scale=0.1;
  b5 = createSprite(400,300,10,10)
  b5.addImage(unOpenedSuitcase);
  b5.scale=0.1;
  b6 = createSprite(600,300,10,10)
  b6.addImage(unOpenedSuitcase);
  b6.scale=0.1;
  b7 = createSprite(800,300,10,10)
  b7.addImage(unOpenedSuitcase);
  b7.scale=0.1;
  b8 = createSprite(1000,300,10,10)
  b8.addImage(unOpenedSuitcase);
  b8.scale=0.1;
  b9 = createSprite(400,500,10,10)
  b9.addImage(unOpenedSuitcase);
  b9.scale=0.1;
  b10 = createSprite(600,500,10,10)
  b10.addImage(unOpenedSuitcase);
  b10.scale=0.1;
  b11 = createSprite(800,500,10,10)
  b11.addImage(unOpenedSuitcase);
  b11.scale=0.1;
  b12 = createSprite(1000,500,10,10)
  b12.addImage(unOpenedSuitcase);
  b12.scale=0.1;

  col1 = createSprite(1300,100,10,10,0)
  col1.addImage(amtBox);
  col1.scale=0.2;

  col2 = createSprite(1300,200,10,10,1)
  col2.addImage(amtBox);
  col2.scale=0.2;
  col3 = createSprite(1300,300,10,10,2)
  col3.addImage(amtBox);
  col3.scale=0.2;
  col4 = createSprite(1300,400,10,10,3)
  col4.addImage(amtBox);
  col4.scale=0.2;
  col5 = createSprite(1300,500,10,10,4)
  col5.addImage(amtBox);
  col5.scale=0.2;
  col6 = createSprite(1300,600,10,10,5)
  col6.addImage(amtBox);
  col6.scale=0.2;
  col7 = createSprite(150,100,10,10,6)
  col7.addImage(amtBox);
  col7.scale=0.2;
  col8 = createSprite(150,200,10,10,7)
  col8.addImage(amtBox);
  col8.scale=0.2;
  col9 = createSprite(150,300,10,10,8)
  col9.addImage(amtBox);
  col9.scale=0.2;
  col10 = createSprite(150,400,10,10,9)
  col10.addImage(amtBox);
  col10.scale=0.2;
  col11 = createSprite(150,500,10,10,10)
  col11.addImage(amtBox);
  col11.scale=0.2;
  col12 = createSprite(150,600,10,10,11)
  col12.addImage(amtBox);
  col12.scale=0.2; 
  
  deal = createSprite(800,height-40)
  deal.addImage(dealImg);
  deal.scale=0.25; 
  deal.visible=false; 

  noDeal = createSprite(1000,height-40)
  noDeal.addImage(no_dealImg);
  noDeal.scale=0.5; 
  noDeal.visible=false;
 
banker = createSprite(600, height-100)
banker.addImage(bankerImg)
banker.scale=0.5; 
banker.visible=false;

song.play();
 
  
}

function draw() {
  background(backImg);  
 // song.play();

  
  drawSprites();

  stroke("black")
  textSize(20)
  fill("white")

  if (selectedSuitcase != -1) {
    text("MY CASE :"+selectedSuitcase,100,height-40)
  } else {
    text("Select a suitcase",100,height-40)
  }
  //text("Amt in your bank :" ,width-300,height-40)
 

  textSize(30);
  fill("black")
  if (openedSuitcases.includes(",1,")) {
    text(shuffledAmountsArray[0], b1.x, b1.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]), false);
  } else {
    text("1",b1.x,b1.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[0]), true);
  }
  if (openedSuitcases.includes(",2,")) {
    text(shuffledAmountsArray[1], b2.x, b2.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[1]), false);
  } else {
    text("2",b2.x,b2.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[1]), true);
  }
  if (openedSuitcases.includes(",3,")) {
    text(shuffledAmountsArray[2], b3.x, b3.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[2]), false);
  } else {
    text("3",b3.x,b3.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[2]), true);
  }
  if (openedSuitcases.includes(",4,")) {
    text(shuffledAmountsArray[3], b4.x, b4.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[3]), false);
  } else {
    text("4",b4.x,b4.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[3]), true);
  }
  if (openedSuitcases.includes(",5,")) {
    text(shuffledAmountsArray[4], b5.x, b5.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[4]), false);
  } else {
    text("5",b5.x,b5.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[4]), true);
  }
  if (openedSuitcases.includes(",6,")) {
    text(shuffledAmountsArray[5], b6.x, b6.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[5]), false);
  } else {
    text("6",b6.x,b6.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[5]), true);
  }  if (openedSuitcases.includes(",7,")) {
    text(shuffledAmountsArray[6], b7.x, b7.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[6]), false);
  } else {
    text("7",b7.x,b7.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[6]), true);
  }  if (openedSuitcases.includes(",8,")) {
    text(shuffledAmountsArray[7], b8.x, b8.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[7]), false);
  } else {
    text("8",b8.x,b8.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[7]), true);
  }  if (openedSuitcases.includes(",9,")) {
    text(shuffledAmountsArray[8], b9.x, b9.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[8]), false);
  } else {
    text("9",b9.x,b9.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[8]), true);
  }  if (openedSuitcases.includes(",10,")) {
    text(shuffledAmountsArray[9], b10.x, b10.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[9]), false);
  } else {
    text("10",b10.x,b10.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[9]), true);
  }  if (openedSuitcases.includes(",11,")) {
    text(shuffledAmountsArray[10], b11.x, b11.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[10]), false);
  } else {
    text("11",b11.x,b11.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[10]), true);
  }  if (openedSuitcases.includes(",12,")) {
    text(shuffledAmountsArray[11], b12.x, b12.y);
    makeColInvisible(arr.indexOf(shuffledAmountsArray[11]), false);
  } else {
    text("12",b12.x,b12.y)
    makeColInvisible(arr.indexOf(shuffledAmountsArray[11]), true);
  }  
  if (suitcaseSelected === false) { //This will happen only once at the beginning
    if (mousePressedOver(b1)) {
        text("1",width/2+60,height-40) // no next to My Case
        b1.addImage(selectedSuitcaseImg); 
        suitcaseSelected=true;
        selectedSuitcase=1;
    } else if (mousePressedOver(b2)) {
      text("2",width/2+60,height-40)
      b2.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=2;
    } else if (mousePressedOver(b3)) {
      text("3",width/2+60,height-40)
      b3.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=3;
    } else if (mousePressedOver(b4)) {
      text("4",width/2+60,height-40)
      b4.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=4;
    } else if (mousePressedOver(b5)) {
      text("5",width/2+60,height-40)
      b5.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=5;
    } else if (mousePressedOver(b6)) {
      text("6",width/2+60,height-40)
      b6.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=6;
    } else if (mousePressedOver(b7)) {
      text("7",width/2+60,height-40)
      b7.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=7;
    } else if (mousePressedOver(b8)) {
      text("8",width/2+60,height-40)
      b8.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=8;
    } else if (mousePressedOver(b9)) {
      text("9",width/2+60,height-40)
      b9.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=9;
    } else if (mousePressedOver(b10)) {
      text("10",width/2+60,height-40)
      b10.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=10;
    } else if (mousePressedOver(b11)) {
      text("11",width/2+60,height-40)
      b11.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=11;
    } else if (mousePressedOver(b12)) {
      text("12",width/2+60,height-40)
      b12.addImage(selectedSuitcaseImg);
      suitcaseSelected=true;
      selectedSuitcase=12;
    } 
  } else { 
    if (mousePressedOver(b1)&&(selectedSuitcase!=1)&&!openedSuitcases.includes(",1,")&&(disableAllSuitcases===false)) {
        b1.addImage(openedSuitcase);
        openedSuitcases=openedSuitcases+",1,";
        text(shuffledAmountsArray[0], b1.x, b1.y);
        choiceMade=false;
    } else if (mousePressedOver(b2)&&(selectedSuitcase!=2)&&!openedSuitcases.includes(",2,")&&(disableAllSuitcases===false)) {
      b2.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",2,";
      text(shuffledAmountsArray[1], b2.x, b2.y);
      choiceMade=false;
    } else if (mousePressedOver(b3)&&(selectedSuitcase!=3)&&!openedSuitcases.includes(",3,")&&(disableAllSuitcases===false)) {
      b3.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",3,";
      text(shuffledAmountsArray[2], b3.x, b3.y);
      choiceMade=false;
    } else if (mousePressedOver(b4)&&(selectedSuitcase!=4)&&!openedSuitcases.includes(",4,")&&(disableAllSuitcases===false)) {
      b4.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",4,";
      text(shuffledAmountsArray[3], b4.x, b4.y);
      choiceMade=false;
    } else if (mousePressedOver(b5)&&(selectedSuitcase!=5)&&!openedSuitcases.includes(",5,")&&(disableAllSuitcases===false)) {
      b5.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",5,";
      text(shuffledAmountsArray[4], b5.x, b5.y);
      choiceMade=false;
    } else if (mousePressedOver(b6)&&(selectedSuitcase!=6)&&!openedSuitcases.includes(",6,")&&(disableAllSuitcases===false)) {
      b6.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",6,";
      text(shuffledAmountsArray[5], b6.x, b6.y);
      choiceMade=false;
    } else if (mousePressedOver(b7)&&(selectedSuitcase!=7)&&!openedSuitcases.includes(",7,")&&(disableAllSuitcases===false)) {
      b7.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",7,";
      text(shuffledAmountsArray[6], b7.x, b7.y);
      choiceMade=false;
    } else if (mousePressedOver(b8)&&(selectedSuitcase!=8)&&!openedSuitcases.includes(",8,")&&(disableAllSuitcases===false)) {
      b8.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",8,";
      text(shuffledAmountsArray[7], b8.x, b8.y);
      choiceMade=false;
    } else if (mousePressedOver(b9)&&(selectedSuitcase!=9)&&!openedSuitcases.includes(",9,")&&(disableAllSuitcases===false)) {
      b9.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",9,";
      text(shuffledAmountsArray[8], b9.x, b9.y);
      choiceMade=false;
    } else if (mousePressedOver(b10)&&(selectedSuitcase!=10)&&!openedSuitcases.includes(",10,")&&(disableAllSuitcases===false)) {
      b10.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",10,";
      text(shuffledAmountsArray[9], b10.x, b10.y);
      choiceMade=false;
    } else if (mousePressedOver(b11)&&(selectedSuitcase!=11)&&!openedSuitcases.includes(",11,")&&(disableAllSuitcases===false)) {
      b11.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",11,";
      text(shuffledAmountsArray[10], b11.x, b11.y);
      choiceMade=false;
    } else if (mousePressedOver(b12)&&(selectedSuitcase!=12)&&!openedSuitcases.includes(",12,")&&(disableAllSuitcases===false)) {
      b12.addImage(openedSuitcase);
      openedSuitcases=openedSuitcases+",12,";
      text(shuffledAmountsArray[11], b12.x, b12.y);
      choiceMade=false;
    }    
}

if (dealNoDealButtonsToBeEnabled()&&choiceMade===true) {
  disableAllSuitcases=false;
}

  if (dealNoDealButtonsToBeEnabled()) {
    if (choiceMade) { //red button clicked
      deal.visible=false; 
      noDeal.visible=false;
      banker.visible=false;
    } else {
      deal.visible=true; 
      noDeal.visible=true;
      banker.visible=true;
      disableAllSuitcases=true;
    }
    if (mousePressedOver(deal)){
      showWinningMessage=true;
      disableAllSuitcases=true;
    } 
    if (mousePressedOver(noDeal)){
      choiceMade=true;
    }
  }
  
  if (showWinningMessage) {
    showWinMessage();
  }
}



function showWinMessage() {
  deal.visible=false;
  noDeal.visible=false;
  fill("white");
  textSize(40);
  text("Congratulations!! You won amount "+shuffledAmountsArray[selectedSuitcase-1], width/2,height-40)
}

function makeColInvisible (index, visible) {
  switch(index) {
    case 0: col1.visible=visible; if (visible) text(arr[index], col1.x-25, col1.y); break;
    case 1: col2.visible=visible; if (visible) text(arr[index], col2.x-25, col2.y); break;
    case 2: col3.visible=visible; if (visible) text(arr[index], col3.x-25, col3.y); break;
    case 3: col4.visible=visible; if (visible) text(arr[index], col4.x-25, col4.y); break;
    case 4: col5.visible=visible; if (visible) text(arr[index], col5.x-25, col5.y); break;
    case 5: col6.visible=visible; if (visible) text(arr[index], col6.x-25, col6.y); break;
    case 6: col7.visible=visible; if (visible) text(arr[index], col7.x-25, col7.y); break;
    case 7: col8.visible=visible; if (visible) text(arr[index], col8.x-25, col8.y); break;
    case 8: col9.visible=visible; if (visible) text(arr[index], col9.x-25, col9.y); break;
    case 9: col10.visible=visible; if (visible) text(arr[index], col10.x-25, col10.y); break;
    case 10: col11.visible=visible; if (visible) text(arr[index], col11.x-25, col11.y); break;
    case 11: col12.visible=visible; if (visible) text(arr[index], col12.x-25, col12.y); break;
  } 
}

function dealNoDealButtonsToBeEnabled() {
  //e.g. openedSuitcases=",3,,4,";
  var startingEndingCommaRemoved = openedSuitcases.slice(1, openedSuitcases.length-1);
  var openedSuitcaseArr = startingEndingCommaRemoved.split(",,");

 // Change below no as needed - checks opened suitcases 
  if (openedSuitcaseArr.length===3 || openedSuitcaseArr.length===7|| openedSuitcaseArr.length===9) {
    return true;  
  } else {
    return false;
  }
}