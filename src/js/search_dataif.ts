import { RegistValue } from './regist_value';

export interface SearchData {
  searchSimilarData(val: string): Promise<Array<RegistValue>>;

  searchDataName(val: string): Promise<Array<RegistValue>>;
}
