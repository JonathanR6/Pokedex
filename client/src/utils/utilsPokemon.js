export const nameFormat = (value) => {
  value = value.includes("-") ? value.split("-").join(" ") : value;
  if (value.length > 10) {
    return `${value.slice(0, 10).trim()}...`;
  }
  return value;
};

export const nameSpaces = (value) => {
  if (!value) return;
  value = value.includes("-") ? value.split("-").join(" ") : value;
  return value;
};
