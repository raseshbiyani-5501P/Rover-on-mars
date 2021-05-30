canvas=document.getElementById('myCanvas');
ctx= canvas.getContext('2d');

var images= ["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631220503682E01_DXXX.jpg"];

var r_1 = Math.floor( Math.random()*4);

r_width = 100;
r_height =70;
r_image ="rover.png";
m_image =images[r_1];
r_xpos=70;
r_ypos=10;

function add(){
b_image= new Image();
b_image.onload=backgroundpicture;
b_image.src=m_image;

rover_image= new Image();
rover_image.onload=roverimage;
rover_image.src=r_image;
}

function backgroundpicture(){
    ctx.drawImage(b_image,0,0,canvas.width,canvas.height);
}

function roverimage(){
    ctx.drawImage(rover_image,r_xpos,r_ypos,r_width,r_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){

keypressed = e.keyCode;
console.log(keypressed);

if(keypressed == '38'){

     up();
console.log("up");
}

if(keypressed == '40')

{
    down();
console.log("down");
}

if (keypressed == '37'){
    left();
    console.log("left");
}

if(keypressed == '39'){
    right();
    console.log("right");
}

}

function up(){

if(r_ypos>=0)
{
    r_ypos= r_ypos-10;
    console.log("X pos of rover= "+r_xpos+"Y pos of rover= "+r_ypos);
    backgroundpicture();
    roverimage();
}
}

function down()
{

    if(r_ypos <=500)  
    {
        r_ypos=r_ypos+10;
        console.log("X pos of rover="+r_xpos+"Y pos of rover="+r_ypos);
        backgroundpicture();
        roverimage();
    }
}

function left(){

    if(r_xpos >=0)  
    {
        r_xpos=r_xpos-10;
        console.log("X pos of rover="+r_xpos+"Y pos of rover="+r_ypos);
        backgroundpicture();
        roverimage();
    }
}

function right(){

    if(r_xpos <=700)  
    {
        r_xpos=r_xpos+10;
        console.log("X pos of rover="+r_xpos+"Y pos of rover="+r_ypos);
        backgroundpicture();
        roverimage();
    }
}


