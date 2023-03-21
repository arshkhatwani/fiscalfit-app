import { PlanBody } from './convertToPlanBody';

function getTotalSavings(items: PlanBody[]): number {
  let total = 0;
  items.forEach(item => {
    total += item.deposit;
  });
  return total;
}

export default getTotalSavings;
