canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverx = 10;
nasaimg = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
randomnumber  = Math.floor(Math.random()*4);
console.log(randomnumber);

rovery = 10;
roverwidth = 100;
roverheight = 100;
background_img = nasaimg[randomnumber];
rover_img = "rover.png";
function add(){
 background_imgTag = new Image();
 background_imgTag.onload = uploadBackground;
 background_imgTag.src = background_img;

 rover_imgTag = new Image();
 rover_imgTag.onload = uploadRover;
 rover_imgTag.src = rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag, roverx, rovery, roverwidth, roverheight);
}

window.addEventListener("keydown" ,mykeydown);

function mykeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
     if(keyPressed == '38'){

        up();
        console.log("up");
     }
     if(keyPressed == '40'){

        down();
        console.log("down");
     }
        if(keyPressed == '37'){

            left();
            console.log("left");
         }

         if(keyPressed == '39'){

            right();
            console.log("right");
         }
     

    
}
function up(){
   if(rovery >= 0){
      rovery = rovery - 10;
      console.log("when up is pressed, x ="+roverx +"y" +rovery);
      uploadBackground();
      uploadRover();
   }
}

function down(){
   if(rovery <= 700){
      rovery = rovery + 10;
      console.log("when down is pressed, x ="+roverx +"y" +rovery);
      uploadBackground();
      uploadRover();
   }
}

function left(){
   if(roverx >= 0){
      roverx = roverx - 10;
      console.log("when left is pressed, x ="+roverx +"y" +rovery);
      uploadBackground();
      uploadRover();
   }
}

function right(){
   if(roverx <= 700){
      roverx = roverx + 10;
      console.log("when right is pressed, x ="+roverx +"y" +rovery);
      uploadBackground();
      uploadRover();
   }
}