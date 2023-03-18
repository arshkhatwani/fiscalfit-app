import { TransactionBody } from './convertToTransactionBody';

function getTotalBalance(items: TransactionBody[]): number {
  let total = 0;
  items.forEach(item => {
    if (item.spend) {
      total -= item.price;
    } else {
      total += item.price;
    }
  });
  return total;
}

export default getTotalBalance;
