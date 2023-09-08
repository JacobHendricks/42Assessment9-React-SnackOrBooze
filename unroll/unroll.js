function unroll(square) {

  const result = [];
  let top = 0,
    bottom = square.length - 1,
    left = 0,
    right = square[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      result.push(square[top][i]);
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(square[i][right]);
    }
    right--;

    // Check if there are more rows to traverse
    if (top <= bottom) {
      // Traverse from right to left
      for (let i = right; i >= left; i--) {
        result.push(square[bottom][i]);
      }
      bottom--;
    }

    // Check if there are more columns to traverse
    if (left <= right) {
      // Traverse from bottom to top
      for (let i = bottom; i >= top; i--) {
        result.push(square[i][left]);
      }
      left++;
    }
  }

  return result;
}

module.exports = unroll;