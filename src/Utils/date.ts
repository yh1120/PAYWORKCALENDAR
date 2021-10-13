export const getDate = () => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
  };
};

export const getPrevDates = () => {
  const firstDay = 2;
  const lastDate = 30;
  const temp: number[] = [];
  // if (firstDay !== 0) {
  //   return temp;
  // }
  for (let i = lastDate - firstDay + 1; i <= lastDate; i++) {
    temp.push(i);
  }
  console.log(temp);
  return temp;
};
export const getThisDates = () => {
  const lastDate = 31;
  const temp: number[] = [];
  for (let i = 1; i <= lastDate; i++) {
    temp.push(i);
  }
  return temp;
};
export const getNextDates = () => {
  const lastDay = 4;
  const temp: number[] = [];
  // if (lastDay === 6) {
  //   return temp;
  // }
  for (let i = 1; i < 7 - lastDay; i++) {
    temp.push(i);
  }
  return temp;
};
