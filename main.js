nose_x=0;
nose_y=0;
function preload() {
    clown_nose_image=loadImage("Clown_nose.png");
}

function setup() {
 canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
pose_load=ml5.poseNet(video,model_loaded);
pose_load.on("pose",gotresults);
}
function model_loaded() {
    console.log("model has been loaded");
}
function gotresults(results) {
   // if (error) {
      //  console.log(error);
   // } else {
        if (results.length>0) {
        console.log(results);
        console.log("nose x : "+results[0].pose.nose.x);
        nose_x=results[0].pose.nose.x-25;
        console.log("nose y : "+results[0].pose.nose.y);  
        nose_y=results[0].pose.nose.y-25;  
        
    }
   //}
}

function draw() {
    image(video,0,0,400,400);
    image(clown_nose_image,nose_x,nose_y,70,70);
}

function take_pic() {
    save('clown_pic.png');
}