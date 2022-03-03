// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teams, TeamMember } = initSchema(schema);

export {
  Teams,
  TeamMember
};