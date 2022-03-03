import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TeamsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Teams {
  readonly id: string;
  readonly teamName?: string;
  readonly TeamMembers?: (TeamMember | null)[];
  readonly division?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teams, TeamsMetaData>);
  static copyOf(source: Teams, mutator: (draft: MutableModel<Teams, TeamsMetaData>) => MutableModel<Teams, TeamsMetaData> | void): Teams;
}

export declare class TeamMember {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly jerseyNumber?: string;
  readonly street?: string;
  readonly city?: string;
  readonly state?: string;
  readonly zip?: string;
  readonly phoneNumber?: string;
  readonly teamMemberType?: string;
  readonly teamsID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TeamMember, TeamMemberMetaData>);
  static copyOf(source: TeamMember, mutator: (draft: MutableModel<TeamMember, TeamMemberMetaData>) => MutableModel<TeamMember, TeamMemberMetaData> | void): TeamMember;
}