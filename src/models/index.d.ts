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

type TeamsFormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Teams {
  readonly id: string;
  readonly teamName?: string;
  readonly Forms?: (TeamsForm | null)[];
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
  readonly teamss?: (TeamsForm | null)[];
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

export declare class TeamsForm {
  readonly id: string;
  readonly teams: Teams;
  readonly form: Form;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TeamsForm, TeamsFormMetaData>);
  static copyOf(source: TeamsForm, mutator: (draft: MutableModel<TeamsForm, TeamsFormMetaData>) => MutableModel<TeamsForm, TeamsFormMetaData> | void): TeamsForm;
}