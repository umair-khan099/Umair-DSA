// Flipping an image

function flipAndInvertImage(image) {
  for (let row of image) {
    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
      let temp = row[left] ^ 1;   
      row[left] = row[right] ^ 1;
      row[right] = temp;

      left++;
      right--;
    }
  }

  return image;
}

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));