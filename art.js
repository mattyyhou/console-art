// TODO Add functionality for drawing shapes
function drawTriangleWithHeight(height) {
  for (let rowCount = 0; rowCount < height; rowCount++) { //Outer loop
    drawLineOfStars(rowCount)
  }
}

function drawLineOfStars(length) {
  let rowOfStars = '*'
  for (let starCount = 0; starCount < length; starCount++) { // Add stars
    rowOfStars = rowOfStars + '*'
  }
  console.log(rowOfStars)
}

function drawPyramid(rows){
    for (let i = 0; i < rows; i++) {
        let row = ''; 
        for (let j = 0; j < rows - i; j++) row += ' '; // Add leading spaces
        for (let k = 0; k <= i; k++) row += '* '; // Add stars
        console.log(row);  
    } 
}

function drawInvertedPyramid(rows){
  for (let i = 0; i < rows; i++) {
      let row = '';
      for (let j = 0; j < i; j++) row += ' '; // Add leading spaces
      for (let k = 0; k < rows - i; k++) row += '* '; // Add stars
      console.log(row);  
  } 
}

function square(rows) {
  //outer loop
  for (let i = 0; i < rows; i++) {
    let row = '';
    
    // Add stars for the row
    for (let j = 0; j < rows; j++) {
      row += '*';
    }

    console.log(row);
  }
}

