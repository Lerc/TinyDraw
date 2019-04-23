let cx = 320;
let cy = 240;

function update() {
  //37 is the key code of the left arrow key
  if ( keyIsDown(37) ) {
    cx-=1;
  }  

  //39 is the key code of the right arrow key
  if ( keyIsDown(39) ) {
    cx+=1;
  }
  
  //38 is the key code of the up arrow key
  if ( keyIsDown(38) ) {
    cy-=1;
  }  

  //40 is the key code of the down arrow key
  if ( keyIsDown(40) ) {
    cy+=1;
  }  

   fillCircle(cx,cy,4);

}



print("Draw with the arrow keys");

run(update);