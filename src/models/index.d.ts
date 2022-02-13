import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TeamsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Teams {
  readonly id: string;
  readonly teamName?: string;
  readonly Forms?: (Form | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teams, TeamsMetaData>);
  static copyOf(source: Teams, mutator: (draft: MutableModel<Teams, TeamsMetaData>) => MutableModel<Teams, TeamsMetaData> | void): Teams;
}

export declare class Form {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly teamsID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Form, FormMetaData>);
  static copyOf(source: Form, mutator: (draft: MutableModel<Form, FormMetaData>) => MutableModel<Form, FormMetaData> | void): Form;
}

export declare class User {
  readonly id: string;
  readonly Form?: Form;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly userFormId?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}