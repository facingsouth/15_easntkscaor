var JC = JC || {};

JC.controller = (function(){
  function init(){
          JC.view.init();
          gameLoop();
        };

  // Interval to add new squares to the board.
  function gameLoop(){
              setInterval( function(){
                JC.model.pickSquare();
              }, 1000);
            };

  function lightUpSquare(square) { 
                JC.view.lightUpSquare( square );
  }

  function updateScore(x, y){
               JC.model.scoreClick(x, y);
  };

  return {
    init: init,
    updateScore: updateScore,
    lightUpSquare: lightUpSquare
  }
})();
