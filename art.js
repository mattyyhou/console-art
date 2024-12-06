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

function drawPyramid(rows){
    for (let i = 0; i < rows; i++) {
        let row = ''; // For every each counter there exist 2*rows-1 value
        for (let j = 0; j < rows - i; j++) row += ' ';
        for (let k = 0; k <= i; k++) row += '* ';
        console.log(row);  
    } 
}

drawPyramid(5)

function drawInvertedPyramid(rows){
  for (let i = 0; i < rows; i++) {
      let row = '';
      for (let j = 0; j < i; j++) {
        row += ' ';
      }
      for (let k = 0; k < rows - i; k++) {
        row += '* ';
      }
      console.log(row);  
  } 
}

drawInvertedPyramid(5)

function square(rows) {
  for (let i = 0; i < rows; i++) {
    let row = '';
    
    // Add stars for the row
    for (let j = 0; j < rows; j++) {
      row += '*';
    }

    console.log(row);
  }
}

// Call the function with the desired number of rows
square(5);
