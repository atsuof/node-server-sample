import natural from 'natural';
import { SampleData } from './db_sampledata';
import { RegistValue } from '../regist_value';
import { SearchData } from '../search_dataif';

export class DBSearch implements SearchData {
  searchSimilarData(value: string): Promise<Array<RegistValue>> {
    const sngn = value.split('@');

    const sngnsplits = sngn[0].split('_');
    const serachOpt: Array<object> = [];

    if (sngnsplits.length > 1) {
      serachOpt.push({ metaP_surName: natural.Metaphone.process(sngnsplits[0]) });
      serachOpt.push({ metaP_givenName: natural.Metaphone.process(sngnsplits[1]) });
    } else {
      serachOpt.push({ metaP_surName: natural.Metaphone.process(sngnsplits[0]) });
    }

    return new Promise((resolve, reject) => {
      SampleData.find({ $or: serachOpt }, (err, res) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          var resultArray: Array<RegistValue> = [];
          for (var index in res) {
            resultArray.push(
              new RegistValue(res[index].get('name'), res[index].get('value'), res[index].get('data'))
            );
          }
          resolve(resultArray);
        }
      });
    });
  }

  searchDataName(value: string): Promise<Array<RegistValue>> {
    return new Promise((resolve, reject) => {
      SampleData.find({ value: { $regex: value, $options: 'i' } }, (err, res) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          var resultArray: Array<RegistValue> = [];
          for (var index in res) {
            resultArray.push(
              new RegistValue(res[index].get('name'), res[index].get('value'), res[index].get('data'))
            );
          }
          resolve(resultArray);
        }
      });
    });
  }
}
