import { IChekParam } from "../interface/IUtil/ICheckDuplicatedId";

function checkDuplicatedId(array: IChekParam): any {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj = { ...obj, [array[i].id]: array[i] };
  }
  return Object.values(obj).sort((a, b) => {
    // @ts-ignore
    return b.id - a.id;
  });
}

export default checkDuplicatedId;
