let displayRatio;
let tileScale;

function initRenderer() {
    createCanvas(windowWidth, windowHeight);
    calcRatios();
}

function preload() {

}

function render() {
    background(0);
    currentArea.render();
}

function calcRatios() {
    displayRatio = min(windowWidth / 16, windowHeight / 9);
    tileScale = displayRatio;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calcRatios();
}