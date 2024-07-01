const lengthOfLastWord = (string: string) =>
  string.trim().split(" ").pop()!.length;

export default lengthOfLastWord;
