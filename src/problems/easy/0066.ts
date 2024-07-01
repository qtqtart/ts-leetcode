const plusOne = (digits: number[]) =>
  [...(BigInt(digits.join("")) + BigInt(1)).toString()].map((item) =>
    Number(item),
  );

export default plusOne;
