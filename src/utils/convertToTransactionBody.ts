import { FormFields } from '../components/Transaction/NewTransaction';
import formatDate from './formatDate';
import { v4 as uuidv4 } from 'uuid';

export interface TransactionBody {
  name: string;
  price: number;
  spend: boolean;
  date: string;
  category: string;
  uid: string;
  tid: string;
}

const convertToTransactionBody = (body: FormFields, uid: string) => {
  let res: TransactionBody = {
    name: body.name,
    price: parseInt(body.price),
    spend: body.spend,
    date: formatDate(body.date),
    category: body.category,
    uid: uid,
    tid: uuidv4(),
  };
  return res;
};

export default convertToTransactionBody;
