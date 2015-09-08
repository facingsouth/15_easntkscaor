var JC = JC || {};

JC.view = (function(){

  function init(){
          fillClickZone();
          attachListeners();
        };

  // These three function put the board on the page.

  function fillClickZone(){
                   for (var i = 0; i < 4; i++) {
                     addRowToClickZone(i);
                   }
                 };

  function addRowToClickZone( y ){
                       $row = $( "<div class='row'></div>" )
                       $( '#click-zone' ).append( $row )
                       for (var i = 0; i < 4; i++) {
                         addClickerToRow( $row, i, y )
                       }
                     };

  function addClickerToRow( row, x, y ){
                     row.append( "<div class='clicker' data-x='" + x + "' data-y='" + y + "'></div>" )
                   };

  // This sets up the click listener on each square.

  function attachListeners(){
                     $( ".clicker" ).click( function(){
                       var $square = $( this )
                       $square.removeClass( "lit" );
                       JC.controller.updateScore($square.data().x, $square.data().y);
                   })};

  // This turns a square red.

  function lightUpSquare( square ){
                   var $square = $( ".clicker[data-x='" + square.x + "'][data-y='" + square.y + "']" );
                   $square.addClass( "lit" );
                 };

  return {
    init: init,
    lightUpSquare: lightUpSquare
  }
})();
