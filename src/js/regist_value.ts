export class RegistValue {
  name: string;
  value: string;
  another: string;

  constructor(name: string | string[], value: string | string[], another: string | string[]) {
    this.name = name as string;
    this.value = value as string;
    this.another = another as string;
  }
}
