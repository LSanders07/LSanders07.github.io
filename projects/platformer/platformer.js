$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(400,650,100,25)
    createPlatform(220,550,100,25)
    createPlatform(400,450,100,25)
    createPlatform(220,350,100,25)
    createPlatform(400,250,100,25)
   

    createPlatform(500,120,25,700)
    createPlatform(200,200,25,455)
    createPlatform(850,120,25,455)
    createPlatform(1000,650,100,25)
    createPlatform(1100,550,100,25)
    createPlatform(1200,450,100,25)
    createPlatform(1300,350,100,25)
    createPlatform(1150,250,100,25)
    createPlatform(1050,150,100,25)
    createPlatform(0,200,200,25)
    createPlatform(500,120,350,25)

    createPlatform(520,650,100,25)
    createPlatform(750,550,100,25)
    createPlatform(520,450,100,25)
    createPlatform(750,350,100,25)
    createPlatform(520,250,100,25)
    
    createPlatform(0,390,100,25)
    createPlatform(100,500,100,25)
    createPlatform(0,630,100,25)

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable('steve', 30,350, 1, 0)
    createCollectable('steve',550,200, 1, 0)
    createCollectable('steve',1080,100, 1, 0)
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('right',100,3000)
    createCannon('left',200,3000)
    createCannon('right',770,3000)


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
