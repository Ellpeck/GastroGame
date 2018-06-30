function mouseDragged() {
    // move camera
    if (mouseButton === LEFT) {
        let diffX = pmouseX - mouseX;
        let diffY = pmouseY - mouseY;

        cameraX = max(min(cameraX + diffX, currentArea.width * tileScale - windowWidth), 0);
        cameraY = max(min(cameraY + diffY, currentArea.height * tileScale - windowHeight), 0); // y = 0 is top!
    }
}
