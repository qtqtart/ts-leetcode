const climbStairs = (number: number): number =>
  number <= 3 ? number : 2 * climbStairs(number - 2) + climbStairs(number - 3);

export default climbStairs;
