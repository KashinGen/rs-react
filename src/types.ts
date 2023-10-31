export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface PersonResponse {
  count: number;
  results: Person[];
  next: string | null;
  person: string | null;
}
