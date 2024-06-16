const isPalindrome = (number: number) => {
  const string = number.toString();

  return string === [...string].reverse().join("");
};
