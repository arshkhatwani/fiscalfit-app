import { FormFields } from '../components/Transaction/NewTransaction';

export interface TransactionBody {
  name: string;
  price: number;
  spend: boolean;
  date: Date;
  category: string;
  uid: string;
}

const convertToTransactionBody = (body: FormFields, uid: string) => {
  let res: TransactionBody = {
    name: body.name,
    price: parseInt(body.price),
    spend: body.spend,
    date: body.date,
    category: body.category,
    uid: uid,
  };
  return res;
};

export default convertToTransactionBody;
