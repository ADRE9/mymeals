const arrayToObject = (arr: any[], key: string) => {
  return arr.reduce(
    (obj: {[x: string]: any}, item: {[x: string]: string | number}) => {
      obj[item[key]] = item;
      return obj;
    },
    {},
  );
};

export default arrayToObject;
