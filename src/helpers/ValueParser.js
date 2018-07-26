import { DateTime } from 'luxon';

export const toDecimal = (value) => parseFloat(replaceComma(value));
export const toInt = (value) => parseInt(replaceComma(value), 10);
export const toDate = (value) => DateTime.fromISO(value);

const replaceComma = (value) => value.replace(/,/g, '.');