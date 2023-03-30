import { BudgetBody } from './convertToBudgetBody';

function getTotalBudget(items: BudgetBody[]): number {
  let total = 0;
  items.forEach(item => {
    total += item.target;
  });
  return total;
}

export default getTotalBudget;
