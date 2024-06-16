const longestCommonPrefix = (strings: string[]) => {
  let prefix = strings[0];

  for (let i = 0; i < strings.length; i++) {
    while (!strings[i].startsWith(prefix)) prefix = prefix.slice(0, -1);

    if (prefix === "") return prefix;
  }

  return prefix;
};

export default longestCommonPrefix;
