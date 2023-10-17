export class Pokemon {
  abilities: string[] = [];
  ability: string;
  number: number;
  name: string;
  type: string;
  types: string[] = [];
  photo: string;
  weight: number;
  height: number;
  move: {
    name: string;
    url: string;
    detail: string;
  };
  level_learned_at: number;
  version_group_details: number[] = [];
  moves: string[] = [];
  stats: string[] = [];
  baseStats: number[] = [];
  stat: { name: string };
  base_stat: number;

  constructor() {
    this.ability = "";
    this.number = 0;
    this.name = "";
    this.type = "";
    this.move = {
      name: "",
      url: "",
      detail: "",
    };
    this.level_learned_at = 0
    this.stat = { name: "" };
    this.base_stat = 0;
    this.photo = "";
    this.weight = 0;
    this.height = 0;
  }
}
