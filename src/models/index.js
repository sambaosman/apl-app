// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Form, Teams } = initSchema(schema);

export {
  Form,
  Teams
};