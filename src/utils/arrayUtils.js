export const removeDuplicates = (arr = []) => {
  const seen = new Set();
  return arr.filter((el) => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });
};
