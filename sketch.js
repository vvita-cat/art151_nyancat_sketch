//ADD names of group members at top of sketch: Marcosand Jason
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan; 
let variable; 
let circles = [];


let colors = [
 [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  [255,105, 180], // hot pink //missing value for hot pink in the middle
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;


async function setup() {
  createCanvas(400, 400);
background(noNyan);
   nyan = await loadSound('media/NyanCat.mp3');
  noNyan = await loadImage('media/NyanCatless.gif'); //added ;
  sprinkles = await loadImage('sprinkles.jpg'); 
 
}

function draw() {
//redraw bachground each frame so the gif should animate 
  background(noNyan);
  
  // Draw all circles
  for (let circle of circles) { //mispelling of circles 
    fill(circle.colors); 
    ellipse(circle.x, circle.y, 50, 50); //ellipse was mispelled
  }
  

  if (mouseIsPressed) {
    let c = random(colors); 
    let newCircle = { //remove space from new circle
      x: mouseX, //the M in mouse was capitalized
      y: mouseY,
      colors: color(c(0), c[1], c[2]) 
    };
    circles.push(newCircle);
  }
}

function mousePressed() {
  let c = random(colors);
  let newCircle = {
    x: mouseX,
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  nyan.setVolume(0.5); //nyan was mispelled
  nyan.rate(playbackRate); //playback rate was mispelled
   nyan.loop();
  
}
function mouseReleased(){
  nyan.stop(); //added bracket
}


function keyPressed() {
  if (keycode === UP_ARROW) { //changed to scrictly equal instead of =, removed semicolon, changed keycode to camel case
    playbackRate += 0.1; //lowercase b in playbackRate
    nyan.rate(playbackRate); 
  } 
  else if (keyCode === DOWN_ARROW) { //changed to strictly equal instead of ==, capitalize down arrow changed spelling of else
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.rate(playbackRate);
  } else if (keyCode === LEFT_ARROW) { 
    playbackRate= 1.0; 
    nyan.rate(playBackRate); 
  }

}
