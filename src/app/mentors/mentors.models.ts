export class Mentor {
  id: number;
  name: string;
  description: string;
  picture: string;
}

export class MentorForSchedule extends Mentor {
  teams: Team[];
}

export class Team {
    id: number;
    name: string;
    room: number;
    updated_room: any;
}