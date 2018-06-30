let currentArea;

function initGame() {
    currentArea = new Area(40, 60);
}

function updateGame() {

}

function setup() {
    initGame();
    initRenderer();
}

function draw() {
    updateGame();
    render();
}
