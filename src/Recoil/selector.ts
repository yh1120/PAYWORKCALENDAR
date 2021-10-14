import { selector } from 'recoil';
import { atomYearMonth } from './atom';

export const prevDateList = selector<number[]>({
  key: 'prevDateList',
  get: ({ get }) => {
    const [year, month] = get(atomYearMonth);
    const date = new Date(year, month, 0);
    const prevLastDate = date.getDate();
    const prevLastDay = date.getDay();
    const temp: number[] = [];
    if (prevLastDay === 6) {
      return temp;
    }
    for (let i = prevLastDate - prevLastDay; i <= prevLastDate; i++) {
      temp.push(i);
    }
    return temp;
  },
});

export const thisDateList = selector<number[]>({
  key: 'thisDateList',
  get: ({ get }) => {
    const [year, month] = get(atomYearMonth);
    const date = new Date(year, month + 1, 0);
    const thisLastDate = date.getDate();
    const temp: number[] = [];
    for (let i = 1; i <= thisLastDate; i++) {
      temp.push(i);
    }
    return temp;
  },
});

export const nextDateList = selector<number[]>({
  key: 'nextDateList',
  get: ({ get }) => {
    const [year, month] = get(atomYearMonth);
    const date = new Date(year, month + 1, 0);
    const thisLastDay = date.getDay();
    const temp: number[] = [];
    if (thisLastDay === 6) {
      return temp;
    }
    for (let i = 1; i < 7 - thisLastDay; i++) {
      temp.push(i);
    }
    return temp;
  },
});

export const selectPrevMonth = selector({
  key: 'prevMonth',
  get: () => {},
  set: ({ get, set }) => {
    const [year, month] = get(atomYearMonth);
    if (month > 0) {
      set(atomYearMonth, [year, month - 1]);
    } else {
      set(atomYearMonth, [year - 1, 11]);
    }
  },
});

export const selectNextMonth = selector({
  key: 'nextMonth',
  get: () => {},
  set: ({ get, set }) => {
    const [year, month] = get(atomYearMonth);
    if (month < 11) {
      set(atomYearMonth, [year, month + 1]);
    } else {
      set(atomYearMonth, [year + 1, 0]);
    }
  },
});
