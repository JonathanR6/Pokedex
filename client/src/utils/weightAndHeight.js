export const weightFormat = (value) => {
  if (!value) return;
  value = value + "";
  value = value.split("");
  value.splice(value.length - 1, 0, ",");
  return value.join("");
};

export const heightFormat = (value) => {
  value = value + "";
  return value.length > 1 ? `${value[0]},${value[1]} mtrs` : `${value}0 cm`;
};

export const heightFormFormat = (value) => {
  if (!value) return;
  return value.length > 1 ? `${value[0]},${value[1]} ` : `${value}0`;
};
