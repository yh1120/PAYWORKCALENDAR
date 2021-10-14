import { getDate } from 'Utils';
import { atom } from 'recoil';
import { IClickedDate } from 'Types';

export const atomYearMonth = atom<number[]>({
  key: 'yearMonth',
  default: [getDate().year, getDate().month],
});

export const atomClickedDate = atom<IClickedDate>({
  key: 'clickedDate',
  default: { year: 0, month: 0, date: 0 },
});
