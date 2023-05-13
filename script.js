noseX=0;
noseY=0;
function preload() {
    clown=loadImage("https://i.postimg.cc/Bn3TL2bf/download-8.jpg");
}

function setup() {
  canvas = createCanvas(800, 800);
  canvas.center();
  video=createCapture(VIDEO);  
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
  video.hide();
}

function modelLoaded(){
    console.log('PoseNet Is Initaialized');
}


function gotPoses(results){
    if(results.length>0){
        noseY=results[0].pose.nose.y;
        noseX=results[0].pose.nose.x
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log(results);
    }
}


function draw() {
  image(video,0,0,800,800);
  fill("red")
  stroke("red")
  image(clown,noseX+100,noseY+150,30,30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}