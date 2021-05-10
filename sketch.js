let clouds=[];
let op=50
let a = 650
let d;
let rr = 0;
//let a = 100;
let cf = [];
let dsp = false;
// const circles = [];
// let circle;
//let fishpic = [];
let fica = false;
let balls = [];
let slider;
let fishes = [];
let fishpic = []
let fisharray=[]

function preload(){
  //loadfisherman
man=loadImage("fisherman.png")
//loadmyprettyfishes
for (let i = 0; i < 6; i++) {
  fishpic[i] = loadImage("fishpic/fish" + i + ".png");
//fisharray[i]=new Cutfish()

}
}
 

function setup() {
  createCanvas(1800, 1400);
    //blood effect
    slider = createSlider(0, 360, 180, 40);
    slider.position(260, 610);
    slider.style("width", "80px");

    //uglycloud
  for (let i = 0; i < 2; i++) {
    clouds[i] = new Cloud(); 
  }

  // fishshade
    for (let i = 0; i < 1; i++) {
      cf.push(
        new Catch(
          random(700, 1200),
          random(height - 100, height - 400),
          random(80,100),
          random(40,60)
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
    }, 4500);
  // //for the sunshine
  // RDS = random(280, 650);
  // //star-size
  // SWH1 = random(2, 8);
  // SWH2 = random(6, 10);
  // SWH3 = random(10, 13);
}
  

function draw() {

  //sky
  c2 = color(247, 173, 136);
  c1 = color(239, 208, 144);
  for (let y = 0; y < 900; y++) {
    n = map(y, 0, 900, 0, 1);
    let newc = lerpColor(c2, c1, n);
    stroke(newc);
    line(0, y, 1800, y);
  }
// //testloadfish array
// image(fishpic[1],20,20)



  //  sun
  //   noStroke()
  //   fill(255,173,89)
  // circle(600,600,400)

  //wharf
  noStroke()
  fill(153, 100, 2, 180)
  rect(0, 850, 900, 30)
  rect(750, 850, 30, 600)
  fill(207, 151, 50)
  rect(0, 850, 900, 10)

 //hat&man
  push();
 fill(220, 10, 100);
  if (keyIsDown(LEFT_ARROW)) {
    a -= 15;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    a += 15;
  }
  image(man,a,600,450,450);
//ellipse(a+100,620,30,20)
  if(a<=660){
   a=660
  }
  else if(a>=1600){
    a=1600
  }
  pop();

  //sea
  c1 = color(82, 159, 153);
  c2 = color(163, 204, 197);
  for (let y = 900; y < 1400; y++) {
    n = map(y, 900, 1100, 0, 1.2);
    let newc = lerpColor(c2, c1, n);
    stroke(newc);
    line(0, y, 1800, y);
  }

// fishshade
for (let i = 0; i < cf.length; i++) {
  cf[i].show();
  cf[i].move();
}

  //clouds
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].move();
    clouds[i].display();}
    
    //shop
  shop();

  //paibian
  textSize(60);
  text("🦈",690,250);
  text("🐋",690,320);
  text("🐳",690,390);
  fill(114,55,0);
  rect(200,725,400,100); 
  fill(255,185,112);
  textFont('Georgia');
  text("Fishy Sushi",250,790)

//fishes_appear_on_choppingboard

for (let i = 0; i < fishes.length; i++) {
    fishes[i].render();
  }
 //blood effect
 for (let i = 0; i < balls.length; i++) {
  balls[i].update();
  balls[i].render();
  if (balls[i].ballisFinished()) {
    balls.splice(i, 1);
  }
}


}

function shop() {
  scale(0.95)
  translate(20, 45)
  noStroke()
  fill(182, 102, 77)
  beginShape()
  vertex(80, 0)
  vertex(680, 0)
  vertex(650, 360)
  vertex(110, 360)
  vertex(80, 0)
  endShape()
  fill(218, 130, 106)
  rect(90, 350, 580, 35)
  fill(189, 247, 247)
  push()
  stroke(183, 99, 75)
  strokeWeight(10)
  beginShape()
  vertex(90, 370)
  vertex(20, 750)
  vertex(740, 750)
  vertex(670, 370)
  vertex(90, 370)
  endShape()
  pop()
  fill(176, 99, 73)
  rect(25, 10, 20, 700)
  rect(715, 10, 20, 700)
  fill(218, 130, 106)
  rect(10, 690, 750, 80, 10)
  rect(10, 770, 750, 80, 10)
  fill(183, 99, 75)
  circle(30, 715, 15)
  circle(30, 745, 15)
  circle(30, 800, 15)
  circle(30, 830, 15)
  rect(10, 765, 750, 10)

  for (let i = 0; i < 5; i++) {
    fill(230, 98, 71)
    noStroke()
    arc(60 + i * 160, 0, 80, 160, 0, PI)
  }
  for (let i = 0; i < 4; i++) {
    fill(250, 250, 227)
    noStroke()
    arc(140 + i * 160, 0, 80, 160, 0, PI)
  }
}

function mouseDragged() {

  if (fica==true && mouseY < 1400) {
    for (let i = 0; i < slider.value(); i++) {
      balls.push(new Ball(mouseX + random(-3, 3), mouseY + random(-3, 3)));
    }
  for (let i = 0; i < 3; i++) {
    fishes[i].mouseDragged();
  }
}
  
  // 
  //console.log(fishes.length)
}



// function mousePressed() {
//   if (mouseY < 1800) {
//     for (var i = 0; i < 2; i++) {
//       let fish=random(fishpic)
//       fishes.push(
//         new Cutfish(random(80,550), random(370,540), 150,fish)
        
//       );
//     }
//   }
// }

// function mousePressed() {
//   console.info("Mouse posiiton:");
//   console.info([mouseX, mouseY]);
// }
// function mouseClicked(){
//   clouds.push(new Cloud());
// }

// function keyPressed(){
//   clouds.splice(Cloud.length-1,1);
// }