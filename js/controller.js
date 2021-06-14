document.body.onkeydown = function( e ) {
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
        32: 'drop'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.onclick = () => changeDirection(LEFT_DIR);
rightButton.onclick = () => changeDirection(RIGHT_DIR);
upButton.onclick = () => changeDirection(UP_DIR);
downButton.onclick = () => changeDirection(DOWN_DIR);
