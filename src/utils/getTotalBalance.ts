import { TransactionBody } from './convertToTransactionBody';

function getTotalBalance(items: TransactionBody[]): {
  expense: number;
  earning: number;
} {
  let res = { expense: 0, earning: 0 };
  items.forEach(item => {
    if (item.spend) {
      res.expense += item.price;
    } else {
      res.earning += item.price;
    }
  });
  return res;
}

export default getTotalBalance;
