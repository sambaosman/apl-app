// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teams, Form, User } = initSchema(schema);

export {
  Teams,
  Form,
  User
};