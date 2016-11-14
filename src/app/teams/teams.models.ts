export class Technology {
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

