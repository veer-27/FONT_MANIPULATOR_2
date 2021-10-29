function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550,550);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function modelLoaded()
{
     console.log('poseNet is initialized');
}

function gotPose(error,results)
{
  if(results.length > 0) 
  {
    console.log(results);
  }  
}

