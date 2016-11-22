class Competitor {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

class Team {
  id: number;
  name: string;
}

export class Invite {
  id: number;
  competitor: Competitor;
  team: Team;
}