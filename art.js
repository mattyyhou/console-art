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

drawTriangleWithHeight()

function drawPyramid(rows){
    for (let i = 0; i < rows; i++) {
        let output = ''; // For every each counter there exist 2*rows-1 value
        for (let j = 0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
}

drawPyramid()