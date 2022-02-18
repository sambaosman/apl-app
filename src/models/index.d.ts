import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TeamMemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TeamMember {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly teamsID: string;
  readonly jerseyNumber: string;
  readonly phoneNumber: string;
  readonly street?: string;
  readonly teamMemberType?: string;
  readonly city?: string;
  readonly state?: string;
  readonly zipCode?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TeamMember, TeamMemberMetaData>);
  static copyOf(source: TeamMember, mutator: (draft: MutableModel<TeamMember, TeamMemberMetaData>) => MutableModel<TeamMember, TeamMemberMetaData> | void): TeamMember;
}

export declare class Teams {
  readonly id: string;
  readonly teamName?: string;
  readonly Forms?: (TeamMember | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teams, TeamsMetaData>);
  static copyOf(source: Teams, mutator: (draft: MutableModel<Teams, TeamsMetaData>) => MutableModel<Teams, TeamsMetaData> | void): Teams;
}