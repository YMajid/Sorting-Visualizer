function swap(numsArray, i, j) {
  const temp = numsArray[i];
  numsArray[i] = numsArray[j];
  numsArray[j] = temp;
}

export default swap;
