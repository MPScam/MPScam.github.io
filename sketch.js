// initial y position for circle 1 and 2
let yCircle1 = 200;
let yCircle2 = 200;

function setup(){
    createCanvas(500, 400);
    background(0, 0, 50);
}


function draw(){
    
    // clear canvas
    background(0, 0, 50);
    
    // make this circle move downward
    circle(150, yCircle1, 100);
    
    circle(359, yCircle2, 100);
    
    
    // decrease circle 1's y to make it move upward
   yCircle1 +=1
    
    // increase circle 2's y to make it move downward
   yCircle2 -=1
   
   // repeats and show "hit bockses"
   
   if (yCircle1>460){
       yCircle1 = 200
       yCircle2 = 200
       print("hit3")
   }
}
