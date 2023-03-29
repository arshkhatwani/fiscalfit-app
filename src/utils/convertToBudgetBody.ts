import { v4 as uuidv4 } from 'uuid';
import { BudgetFormFields } from '../components/Budget/NewBudget';

export interface BudgetBody {
  category: string;
  target: number;
  uid: string;
  bid: string;
}

const convertToBudgetBody = (body: BudgetFormFields, uid: string) => {
  let res: BudgetBody = {
    category: body.category,
    target: parseInt(body.target),
    uid: uid,
    bid: uuidv4(),
  };
  return res;
};

export default convertToBudgetBody;
