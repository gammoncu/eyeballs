let video; 
let poseNet;
let noseX = 0;
let noseY = 0;
//eyes
let eyelX = 0;
let eyelY = 0;
let eyerX = 0;
let eyerY = 0;
//eyeballs
let eyblX = 0;
let eyblY = 0;
let eybrX = 0;
let eybrY = 0;


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
  //console.log(ml5);
}  
 
function gotPoses(poses){
  //console.log(poses);
  if(poses.length > 0){
  let newX = poses[0].pose.keypoints[0].position.x;
  let newY = poses[0].pose.keypoints[0].position.y;
  noseX = lerp(noseX, newX, 0.5);
  noseY = lerp(noseY, newY, 0.5);  
  let neweX = poses[0].pose.keypoints[1].position.x;
  let neweY = poses[0].pose.keypoints[1].position.y;
  eyelX = lerp(eyelX, neweX, 0.5);
  eyelY = lerp(eyelY, neweY, 0.5);  
  let newrX = poses[0].pose.keypoints[2].position.x;
  let newrY = poses[0].pose.keypoints[2].position.y;
  eyerX = lerp(eyerX, newrX, 0.5);
  eyerY = lerp(eyerY, newrY, 0.5);  
  
  // for eyeballs
  let newblX = poses[0].pose.keypoints[1].position.x;
  let newblY = poses[0].pose.keypoints[1].position.y;
  eyblX = lerp(eyblX, newblX, 0.3);
  eyblY = lerp(eyblY, newblY, 0.3);  
  let newbrX = poses[0].pose.keypoints[2].position.x;
  let newbrY = poses[0].pose.keypoints[2].position.y;
  eybrX = lerp(eybrX, newbrX, 0.3);
  eybrY = lerp(eybrY, newbrY, 0.3);  
  
    
  }
}

function modelReady(){
  console.log('model ready');
}

function draw() {
  image(video, 0, 0); 
  fill(255, 0, 0);
  let d = dist(noseX, noseY, eyelX, eyelY)
  //ellipse(noseX, noseY,d);
  
  //eyeL
  fill(255, 255, 255);
  ellipse(eyelX, eyelY,d);
  //eyeR
  fill(255, 255, 255);
  ellipse(eyerX, eyerY,d);
  
  //eyeL
  fill(0,0,0);
  ellipse(eyblX, eyblY,d/2);
  //eyeR
  fill(0,0,0);
  ellipse(eybrX, eybrY,d/2);
  
  }