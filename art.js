// TODO Add functionality for drawing shapes
function drawTriangleWithHeight(height) {
  for (let rowCount = 0; rowCount < height; rowCount++) {
    drawLineOfStars(rowCount)
  }
}

function drawLineOfStars(length) {
  let rowOfStars = '*'
  for (let starCount = 0; starCount < length; starCount++) {
    rowOfStars = rowOfStars + '*'
  }
  console.log(rowOfStars)
}

drawTriangleWithHeight(5)

  