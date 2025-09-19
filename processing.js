var model;

async function loadModel() {
  model = await tf.loadGraphModel("TFJS/model.json");
}

function predictImage() {
  // console.log("Processing Image...");

  let image = cv.imread(canvas); // let is like const but locally (function me hi chalega)
  cv.cvtColor(image, image, cv.COLOR_RGBA2GRAY, 0);
  cv.threshold(image, image, 175, 255, cv.THRESH_BINARY);

  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  cv.findContours(
    image,
    contours,
    hierarchy,
    cv.RETR_CCOMP,
    cv.CHAIN_APPROX_SIMPLE
  );

  let cnt = contours.get(0);
  // Getting bounding rect
  let rect = cv.boundingRect(cnt);
  image = image.roi(rect);

  var height = image.rows;
  var width = image.cols;

  if (height > width) {
    height = 20;
    const scaleFactor = image.rows / height;
    width = Math.round(image.cols / scaleFactor);
  } else {
    width = 20;
    const scaleFactor = image.cols / width;
    height = Math.round(image.rows / scaleFactor);
  }

  let newSize = new cv.Size(width, height);
  cv.resize(image, image, newSize, 0, 0, cv.INTER_AREA);

  const LEFT = Math.ceil(4 + (20 - width) / 2);
  const RIGHT = Math.floor(4 + (20 - width) / 2);
  const TOP = Math.ceil(4 + (20 - height) / 2);
  const BOTTOM = Math.floor(4 + (20 - height) / 2);
  // console.log(`Left: ${LEFT}, Right: ${RIGHT}, Top: ${TOP}, Bottom: ${BOTTOM}`);
  //

  const BLACK = new cv.Scalar(0, 0, 0, 255); // color of border
  cv.copyMakeBorder(
    image,
    image,
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    cv.BORDER_CONSTANT,
    BLACK
  );

  // Centre of Mass
  cv.findContours(
    image,
    contours,
    hierarchy,
    cv.RETR_CCOMP,
    cv.CHAIN_APPROX_SIMPLE
  );
  cnt = contours.get(0);
  const Moments = cv.moments(cnt, false);

  const cx = Moments.m10 / Moments.m00;
  const cy = Moments.m01 / Moments.m00;
  // console.log(`M00: ${Moments.m00}, cx: ${cx}, cy: ${cy}`);

  const X_SHIFT = Math.round(image.cols / 2.0 - cx);
  const Y_SHIFT = Math.round(image.rows / 2.0 - cy);
  console.log(`X_SHIFT: ${X_SHIFT}, Y_SHIFT: ${Y_SHIFT}`);

  // Shifting the image to center
  newSize = new cv.Size(image.cols, image.rows);
  const M = cv.matFromArray(2, 3, cv.CV_64FC1, [1, 0, X_SHIFT, 0, 1, Y_SHIFT]);
  cv.warpAffine(
    image,
    image,
    M,
    newSize,
    cv.INTER_LINEAR,
    cv.BORDER_CONSTANT,
    BLACK
  );

  // pixel values
  let pixelValues = image.data;

  pixelValues = Float32Array.from(pixelValues);

  console.log(`Pixel Values: ${pixelValues}`);
  pixelValues = pixelValues.map(function (item) {
    return item / 255.0;
  });

  // console.log(`Scaled Array: ${pixelValues}`);

  const X = tf.tensor([pixelValues]);
  // console.log(`Shape of Tensor: ${X.shape}`);
  // console.log(`Data Type of Tensor: ${X.dtype}`);

  result = model.predict(X);
  result.print();

  // console.log(tf.memory());

  // download value from tensor
  const output = result.dataSync()[0];

  // // Testing only (Delete later)
  // const outputCanvas = document.createElement('CANVAS');
  // cv.imshow(outputCanvas, image);
  // document.body.appendChild(outputCanvas);

  // Cleaning up
  image.delete();
  cnt.delete();
  contours.delete();
  hierarchy.delete();
  M.delete();

  // dispose the tensor to release memory
  X.dispose();
  result.dispose();

  return output;
}
