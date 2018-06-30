class Tile {
    constructor(area, x, y) {
        this.area = area;
        this.x = x;
        this.y = y;
    }

    render() {
        stroke(255);
        fill(255, 0, 0);
        strokeWeight(1 / 16);
        rect(0, 0, 1, 1);
    }
}