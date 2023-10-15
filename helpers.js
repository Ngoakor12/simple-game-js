const STAGE_POSITIONS = [
  [
    [0, 0],
    [100, 0],
    [200, 0],
    [300, 0],
    [400, 0],
    [500, 0],
  ],
  [
    [0, 100],
    [100, 100],
    [200, 100],
    [300, 100],
    [400, 100],
    [500, 100],
  ],
  [
    [0, 200],
    [100, 200],
    [200, 200],
    [300, 200],
    [400, 200],
    [500, 200],
  ],
  [
    [0, 300],
    [100, 300],
    [200, 300],
    [300, 300],
    [400, 300],
    [500, 300],
  ],
  [
    [0, 400],
    [100, 400],
    [200, 400],
    [300, 400],
    [400, 400],
    [500, 400],
  ],
  [
    [0, 500],
    [100, 500],
    [200, 500],
    [300, 500],
    [400, 500],
    [500, 500],
  ],
];

function getRandomPos() {
  const x = Math.floor(Math.random() * STAGE_POSITIONS[0].length);
  const y = Math.floor(Math.random() * STAGE_POSITIONS.length);

  return STAGE_POSITIONS[x][y];
}

function getNumberFromPixel(pixelStr) {
  return pixelStr.substring(0, pixelStr.length - 2);
}

function hasCollision(obj1, obj2) {
  // Get the position and dimensions of the first element
  const rect1 = obj1.getBoundingClientRect();

  // Get the position and dimensions of the second element
  const rect2 = obj2.getBoundingClientRect();

  // Check for collision
  if (
    rect1.right > rect2.left &&
    rect1.left < rect2.right &&
    rect1.bottom > rect2.top &&
    rect1.top < rect2.bottom
  ) {
    // Collision detected
    return true;
  }

  // No collision detected
  return false;
}
// console.log(getRandomPos());

// export { STAGE_POSITIONS, getRandomPos };
