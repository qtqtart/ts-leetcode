const mySqrt = (number: number) => {
  let left = 0;
  let right = number;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square < number) left = mid + 1;
    else if (square > number) right = mid - 1;
    else return mid;
  }

  return right;
};

export default mySqrt;
