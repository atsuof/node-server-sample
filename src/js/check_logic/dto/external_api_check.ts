import axios from 'axios';
import { createReturnMsg, ReturnMessage } from '../util/msg_util';
import { Logger } from '../../logger/ld_logger';
import { PropertyNames } from '../dto/types/dto_types'
import { SearchData } from '../../search_dataif';
import config from 'config';

const baseURL: string = config.get('serviceurl');
export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: '*/*',
  },
  //proxy:false,
  responseType: 'json',
});
export async function checkExternalApi(value: { [key: string]: string[] }, dataList: []) {
  let ruleFact = createSomthingValue(value, dataList);

  let jsonstr = JSON.stringify(ruleFact);
  jsonstr = jsonstr.replace('"tmp_value":', '"' + PropertyNames.VALUE + '":');
  jsonstr = jsonstr.replace('"tmp_name":', '"' + PropertyNames.NAME + '":');

  var result = await axiosClient.post('/', jsonstr);

  let returnMsgs: ReturnMessage[] = [];
  if (result.data.facts[PropertyNames.RESULT] != null) {
    result.data.facts[PropertyNames.RESULT].forEach((x: { errorLevel: string; errorCode: string; description: string }) => {
      returnMsgs.push(createReturnMsg(x.errorLevel, x.errorCode, x.description));
    });
  }
  return returnMsgs;
}

function createSomthingValue(value: {[key:string]: string[]}, dataLIst: []) {
  return {};
}
