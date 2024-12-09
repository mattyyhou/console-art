const { askForShape, askForDimension } = require('./input');
const { drawTriangleWithHeight, drawPyramid, drawInvertedPyramid, square } = require('./art');

async function main() {
    const shape = await askForShape();
    const dimension = await askForDimension();

    // TODO Use input to draw shapes
if  (shape === 'square') {
    square(dimension);
} else if (shape === 'triangle'){
    drawTriangleWithHeight(dimension);
} else if (shape === 'pyramid'){
    drawPyramid(dimension);
} else if (shape === 'uPyramid'){
    drawInvertedPyramid(dimension);
}
}

main();
