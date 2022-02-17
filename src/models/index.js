// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TeamMember, Teams } = initSchema(schema);

export {
  TeamMember,
  Teams
};