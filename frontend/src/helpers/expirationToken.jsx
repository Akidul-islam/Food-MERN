export const setExpiration = (key, value, minutes) => {
  const now = new Date();
  const item = {
    value: value,
    expires: now.getTime() + minutes * 60 * 1000,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getExpiration = (key) => {
  const item = JSON.parse(localStorage.getItem(key));
  if (!item) return null;

  return item;
};
