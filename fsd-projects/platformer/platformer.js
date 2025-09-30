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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      toggleGrid();
    

    // TODO 2 - Create Platforms
    createPlatform(300,675,100,200, "blue");
    createPlatform(450,550,100,200, "red");
    createPlatform(1000,250,100,200, "yellow");
    createPlatform(650,600,100,200, "purple");
    createPlatform (900,650,100,200,"black");




    // TODO 3 - Create Collectables
    createCollectable("diamond",345,495);
    createCollectable("steve",795,245);
    createCollectable("diamond",1045,245);

    
    // TODO 4 - Create Cannons
    createCannon("right",400,550);
    createCannon("bottom",1000,550);
    createCannon("top",500,600);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
