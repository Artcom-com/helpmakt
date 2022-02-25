/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable radix */
import convert from './convert';

export const average = (data: string[]) => {
  const result = convert(data);
  let total = 0;

  for (const num of result) {
    total += parseInt(num);
  }
  const secondsToMinutes = total / 60;

  return (secondsToMinutes / result.length).toFixed(2).replace('.', ',');
};

export const countZero = (data: string[]) => {
  const result = convert(data);
  let numberOfZero = 0;
  for (const num of result) {
    if (parseInt(num) === 0) {
      numberOfZero++;
    }
  }

  return numberOfZero;
};

export const countLessThan1minute = (data: string[]) => {
  const result = convert(data);
  let numberOfLessThan1minute = 0;

  for (const num of result) {
    if (parseInt(num) > 0 && parseInt(num) <= 60) {
      numberOfLessThan1minute++;
    }
  }

  return numberOfLessThan1minute;
};

export const countLessThan2minute = (data: string[]) => {
  const result = convert(data);
  let numberOfLessThan2minute = 0;

  for (const num of result) {
    if (parseInt(num) > 60 && parseInt(num) <= 60 * 2) {
      numberOfLessThan2minute++;
    }
  }

  return numberOfLessThan2minute;
};

export const countLessThan3minute = (data: string[]) => {
  const result = convert(data);
  let numberOfLessThan3minute = 0;

  for (const num of result) {
    if (parseInt(num) > 60 * 2 && parseInt(num) <= 60 * 3) {
      numberOfLessThan3minute++;
    }
  }

  return numberOfLessThan3minute;
};

export const countLessThan4minute = (data: string[]) => {
  const result = convert(data);
  let numberOfLessThan4minute = 0;

  for (const num of result) {
    if (parseInt(num) > 60 * 3 && parseInt(num) <= 60 * 4) {
      numberOfLessThan4minute++;
    }
  }

  return numberOfLessThan4minute;
};

export const countLessThan5minute = (data: string[]) => {
  const result = convert(data);
  let numberOfLessThan5minute = 0;

  for (const num of result) {
    if (parseInt(num) > 60 * 4 && parseInt(num) <= 60 * 5) {
      numberOfLessThan5minute++;
    }
  }

  return numberOfLessThan5minute;
};

export const countGreaterThan5minute = (data: string[]) => {
  const result = convert(data);
  let numberOfGreaterThan5minute = 0;

  for (const num of result) {
    if (parseInt(num) > 60 * 5) {
      numberOfGreaterThan5minute++;
    }
  }

  return numberOfGreaterThan5minute;
};
