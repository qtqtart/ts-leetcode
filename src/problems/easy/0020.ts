const isValid = (string: string) => {
  const stack: string[] = [];

  const map = new Map<string, string>([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ]);

  for (const char of string)
    if (map.has(char)) stack.push(char);
    else if (char !== map.get(stack.pop()!)) return false;

  return stack.length === 0;
};

export default isValid;
