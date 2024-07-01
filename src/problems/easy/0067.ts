const addBinary = (string1: string, string2: string) =>
  (BigInt("0b" + string1) + BigInt("0b" + string2)).toString(2);

export default addBinary;
