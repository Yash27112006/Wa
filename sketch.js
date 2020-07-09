var canvas;
var thiefCount;
var allThieves;
var database;
var thief;
var tab,tab2;
var i = 0;
var x = 30;
var y = 60;
var email;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  var storageRef = firebase.storage().ref();
  var imageRef = storageRef.child('ali.jpg');
  imageRef.getDownloadURL().then(function(url){
      console.log(url.toString());
      var modURL = "https://cors-anywhere.herokuapp.com/"+url;
      tab = createImg(modURL,"test");
      tab.position(x,y);
      tab.style("width","100px");
      tab.style("height","100px");
  });
  var image2Ref = storageRef.child('anthony.jpg');
  image2Ref.getDownloadURL().then(function(url){
      console.log(url.toString());
      var modURL = "https://cors-anywhere.herokuapp.com/"+url;
      tab2 = createImg(modURL,"test");
      tab2.position(x-30,y+120);
      tab2.style("width","150px");
      tab2.style("height","150px");
  });

  thief = new Thief();
  thief.getCount();
  Thief.getThiefInfo();
  thief2 = new Thief();
  thief2.getCount();
  Thief.getThiefInfo();

  
}


function draw(){
  background(255);
  if(thiefCount>1){
    readCriminals();
  }
}


function readCriminals(){
  if(allThieves !== undefined){
    
    var display_position = 100;
        var index = 0;
     var posX = 30;
     var posY = 60;
 

    for(var thief in allThieves){
      index = index + 1 ;
     
      textSize(15);
     
    if(thief !== undefined){
      text("Name:  " + allThieves[thief].Name,posX+170,posY+20);
      text("Age:  " + allThieves[thief].Age,posX+170,posY+40);
      text("Gender:  " + allThieves[thief].Gender,posX+170,posY+60);     
      text("Address Of Last Crime:  " + allThieves[thief].addressOfLastCrime,posX+170,posY+80);
      posY = posY+150;

      var button = createButton('Inform Police');
      button.position(posX+500,posY-100);

      button.mousePressed(()=>{
        tab.hide();
        tab2.hide();
        clear();
        background("white");
        email = new Mail();
        email.sendMail();
      });

      }
    }

  }
}