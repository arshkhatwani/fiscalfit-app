import { PlanFormFields } from '../components/Plan/NewPlan';

export interface PlanBody {
  name: string;
  category: string;
  target: number;
  deposit: number;
  completed: boolean;
  uid: string;
}

const convertToPlanBody = (body: PlanFormFields, uid: string) => {
  let res: PlanBody = {
    name: body.name.trim(),
    category: body.category,
    target: parseInt(body.target),
    deposit: 0,
    completed: false,
    uid: uid,
  };
  return res;
};

export default convertToPlanBody;
