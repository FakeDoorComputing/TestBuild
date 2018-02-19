// initialise global variables
var game_canvas, cv1, xPos, yPos, xPer, yPer;

// initialise level design variables (these are percentages)
var
xPosLev=[10, 5,15,30,80,64,13],/*x position length*/
yPosLev=[18,36,84,12,19,30,25],/*y position length*/
xPosMov=[12,13,14,15,16,17,18],/*x position move to*/
yPosMov=[23,24,25,26,27,28,29];/*y position move to*/

// load game when screen loads
$(window).load(function(){

  game_canvas=document.getElementById("gameArea"); // puts the canvas into a variable
  cv1=game_canvas.getContext("2d"); // sets the context to 2d
  screen_size(); // get the screen size
  draw(); // start draw cycle
})

function screen_size()
{
  var wd=window.innerWidth-50, ht=window.innerHeight-50; // take 50 pixels off screen width and height (prevents screen run-over)
  game_canvas.width=wd;
  game_canvas.height=ht;
  xPer=wd/100, yPer=ht/100; // divide the window sizes by 100 (for more control divide by 1000, but increase x/y positions by factor of 10)
}

function draw(){
  cv1.beginPath(); // start draw
  for(i=0;i<xPosLev.length;i++){ /*run however many items in array*/
    xPos=xPer*xPosLev[i]; /*the x position is the percentage of the screen given by xPosLev*/
    yPos=yPer*yPosLev[i]; /*the y position is the percentage of the screen given by yPosLev*/
    xMov=xPer*xPosMov[i]; /*the x position is the percentage of the screen given by xPosMov*/
    yMov=yPer*yPosMov[i]; /*the y position is the percentage of the screen given by yPosMov*/
    cv1.moveTo(xMov,yMov); /*pen up, move to here */
    cv1.lineTo(xPos,yPos); /*pen down, draw this size */
    cv1.stroke(); /*fill the line*/
  }
}
