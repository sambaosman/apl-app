import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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

export declare class Teams {
  readonly id: string;
  readonly teamName?: string;
  readonly Forms?: (Form | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teams, TeamsMetaData>);
  static copyOf(source: Teams, mutator: (draft: MutableModel<Teams, TeamsMetaData>) => MutableModel<Teams, TeamsMetaData> | void): Teams;
}