let d;
let rr = 0;
let a = 100;
let cf = [];
let dsp = false;
const circles = [];
let circle;
var fish = [];
var fica = false;
function preload() {
  for (let i = 0; i < 6; i++) {
    fish[i] = loadImage("fishpic/fish" + i + ".png");
  }
}
function setup() {
  createCanvas(700, 700);
  //fishshade
  for (let i = 0; i < 1; i++) {
    cf.push(
      new Catch(
        random(0, 650),
        random(height - 80, height - 150),
        random(30, 40)
      )
    )
  }
  setInterval(function () {
    for (let i = 0; i < 1; i++) {
      cf.push(
        new Catch(
          random(200, 650),
          random(height - 60, height - 150),
          random(30, 40)
        )
      );
    }
  }, 5000);
  
  //draw overlap spot
   let protection = 0;
  while (circles.length < 6) {
    let fishes = random(fish);
    circle = new Circ(random(width-100), random(height-120), 50, fishes);
    let overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.pos.x, circle.pos.y, other.pos.x, other.pos.y);
      if (d < circle.r + other.r - 150) {
        overlapping = true;  
      }
    }
    if (!overlapping) {
      circles.push(circle);
    }
    protection++;
    if (protection > 1000) {
      break;
    }
  }
}

function draw() {
 background(200);  
  //random fish
  if(fica==true){
     for (let i = 0; i < circles.length; i++) {
    circles[i].render();
       //circles.push(new Circ(random(width-100), random(height-120), 50, fishes))
  }
  
  }

  //fishshade
  for (let i = 0; i < cf.length; i++) {
    cf[i].show();
    cf[i].move();
  }
  //fishman
  push();
  fill(rr, 100, 0);
  if (keyIsDown(LEFT_ARROW)) {
    a -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    a += 3;
  }
  ellipse(a, 70, 50, 50);
  pop();

   
}

