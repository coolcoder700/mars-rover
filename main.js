canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
images_array=["image 2.jpg","mars.jpg","1000MR0044631280503688E0B_DXXX.jpg"];
random_number = Math.floor(Math.random() * 3);
rover_width=100;
rover_height=90;
roverx=10;
rovery=10;
rover_image="rover.png";
bg_image=images_array[random_number];
function add(){
    bg_imgTag=new Image();
    bg_imgTag.onload=uploadbg;
    bg_imgTag.src=bg_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadbg(){
    ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,roverx,rovery,rover_width,rover_height);  
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='37'){
        console.log("left");
        Left();
    }
    if (keypressed=='38'){
        console.log("up");
        up();
    }
    if (keypressed=='39'){
        console.log("right");
        right();
    }
    if (keypressed=='40'){
        console.log("down");
        down();
    }
    function Left(){
        if (roverx>=0){
            roverx=roverx-10;
            console.log("x="+roverx+" y="+rovery);
            uploadbg();
            uploadrover();
        }
    }
    function right(){
        if (roverx<=700){
            roverx=roverx+10;
            console.log("x="+roverx+" y="+rovery);
            uploadbg();
            uploadrover();
        }
    }
    function up(){
        if (rovery>=0){
            rovery=rovery-10;
            console.log("x="+roverx+" y="+rovery);
            uploadbg();
            uploadrover();
        }
    }
    function down(){
        if (rovery<=500){
            rovery=rovery+10;
            console.log("x="+roverx+" y="+rovery);
            uploadbg();
            uploadrover();
        }
    }
}