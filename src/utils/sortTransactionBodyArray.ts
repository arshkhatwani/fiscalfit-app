import { TransactionBody } from './convertToTransactionBody';
import { parse } from 'date-fns';

export function sortByDateNewestFirst(myArray: TransactionBody[]) {
  myArray.sort((a, b) => {
    const dateA = parse(a.date, 'd MMMM yyyy', new Date());
    const dateB = parse(b.date, 'd MMMM yyyy', new Date());

    if (dateB > dateA) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });
  return myArray;
}
