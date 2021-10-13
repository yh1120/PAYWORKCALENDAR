import { atom } from 'recoil';
import { getDate } from 'Utils';

export const atomYear = atom({
  key: 'year',
  default: getDate().year,
});

export const atomMonth = atom({
  key: 'month',
  default: getDate().month,
});
