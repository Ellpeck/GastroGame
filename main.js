let currentArea;

function initGame() {
    currentArea = new Area(15, 10);
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