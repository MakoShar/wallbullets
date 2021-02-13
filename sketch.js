var thickness, speed, weight, bullet, wall, damage;

function setup() {
  createCanvas(1600, 400);
  thickness = random(22, 83);
  bullet = createSprite(100, 200, 30, 15);
  bullet.shapeColor = color(255, 255, 255);

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(110, 110, 110);

  speed= random(223, 321);
  weight = random(30, 52);
  //speed= random(35, 80);

  bullet.velocityX = speed;

}

function draw() {

  background(0);
  
  drawSprites();
  if(hascollied(bullet,wall)){
    bullet.velocityX = 0;

    damage = (0.5 * weight * speed * speed) / (thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
      textStyle("bold");
      textSize(30);
      fill(130, 130, 255);
      text("Wall is not effective", 700, 150);
      text("Damage Done : "+Math.round(damage), 700, 200)
    }if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
      textStyle("bold");
      textSize(30);
      fill(130, 130, 255);
      text("Wall is effective", 700, 150);
      text("Damage Done : "+Math.round(damage), 700, 200)
  }
  drawSprites();
  }
  drawSprites();
}


function collide(o1, o2){
  if(o1.x - o2.x < (o1.width+o2.width)/ 2){
    return true;
  }
  return false;
  
  
}

function hascollied(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}