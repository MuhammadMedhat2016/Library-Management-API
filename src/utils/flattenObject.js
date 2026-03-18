export default (object) => {
  const result = {};
  function flatten(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        if (obj[key] === null || obj[key] instanceof Date) {
          result[key] = obj[key];
        } else {
          flatten(obj[key]);
        }
      } else {
        result[key] = obj[key];
      }
    }
  }
  flatten(object);
  return result;
};
