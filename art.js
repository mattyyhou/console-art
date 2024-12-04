// TODO Add functionality for drawing shapes
function drawShape(length) {
    let rowOfShape = "";
    for (let shapeCount = 0; shapeCount < length; shapeCount++) {
      rowOfShape = rowOfShape + "*";
    }
    console.log(rowOfShape)
  }
  
  function drawShapeWithHeight(height) {
    for (let rowCount = 1; rowCount < height + 1; rowCount++) {
      drawShape(rowCount)
    }
  }
  
  drawShapeWithHeight(5)
  