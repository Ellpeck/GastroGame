class Area {

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.grid = new Array(width);
        for (let x = 0; x < width; x++) {
            this.grid[x] = new Array(height);
            for (let y = 0; y < height; y++) {
                this.grid[x][y] = new Tile(this, x, y);
            }
        }
    }

    render() {
        push();
        scale(tileScale, tileScale);

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                push();
                translate(x, y);
                this.grid[x][y].render();
                pop();
            }
        }

        pop();
    }
}