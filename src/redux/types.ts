export interface Dog extends DogCredentials {
  id: string;
}

export interface DogCredentials {
  chip: string;
  picture: string;
  name: string;
}
export type Dogs = Dog[];

export interface DataDogs {
  dogs: Dogs;
}
