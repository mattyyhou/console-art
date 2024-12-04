// TODO Add functionality for drawing shapes
function drawLineOfStars(length) {
    let rowOfStars = "";
    for (let starCount = 0; starCount < length; starCount++) {
      rowOfStars = rowOfStars + "*";
    }
    console.log(rowOfStars)
  }
  
  function drawTriangleWithHeight(height) {
    for (let rowCount = 1; rowCount < height + 1; rowCount++) {
      drawLineOfStars(rowCount)
    }
  }
  
  drawTriangleWithHeight(5)
  