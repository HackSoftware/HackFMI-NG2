class Team {
    id: number;
    name: string;
    room: number;
    updated_room: any;
}

export class Mentor {
  id: number;
  name: string;
  description: string;
  picture: string;
  teams: Team[];
}
