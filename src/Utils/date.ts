export const getDate = () => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
  };
};
