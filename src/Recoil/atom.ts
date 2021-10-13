import { atom } from 'recoil';
import { getDate } from 'Utils';

export const atomYear = atom<number>({
  key: 'year',
  default: getDate().year,
});

export const atomMonth = atom<number>({
  key: 'month',
  default: getDate().month,
});

export const atomClickedDate = atom({
  key: 'clickedDate',
  default: 'asdf',
});
