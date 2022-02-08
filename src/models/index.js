// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Form } = initSchema(schema);

export {
  User,
  Form
};