export class CheckResult {
  fromnode-server-sample: string;
  others: DetailInfo[];

  constructor(fromnode-server-sample: string, others: DetailInfo[]) {
    this.fromnode-server-sample = fromnode-server-sample;
    this.others = others;
  }
}
export class DetailInfo {
  target: string;
  distance: number;
  name: string;
  department: string;

  constructor(target: string, distance: number, name: string, department: string) {
    this.target = target;
    this.distance = distance;
    this.name = name;
    this.department = department;
  }
}
