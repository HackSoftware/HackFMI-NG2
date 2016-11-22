class Technology {
  id: number;
  name: string;
}

export class PublicTeam {
  id: number;
  name: string;
  idea_description: string;
  repository: string;
  technologies_full: Technology[];
  need_more_members: boolean;
  members_needed_desc: string;
  room: number;
  picture: string;
}

class Member {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export class PrivateTeam {
  id: number;
  name: string;
  idea_description: string;
  repository: string;
  technologies: number[];
  technologies_full: Technology[];
  need_more_members: boolean;
  members_needed_desc: string;
  room: number;
  picture: string;
  member: Member[];
  leader_id: number;
  leader_email: string;
}
