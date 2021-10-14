import { atom } from 'recoil';
import { getDate } from 'Utils';

type IClickedDate = {
  year: number;
  month: number;
  date: number;
};

export const atomYearMonth = atom<number[]>({
  key: 'yearMonth',
  default: [getDate().year, getDate().month],
});

export const atomClickedDate = atom<IClickedDate>({
  key: 'clickedDate',
  default: { year: 0, month: 0, date: 0 },
});
