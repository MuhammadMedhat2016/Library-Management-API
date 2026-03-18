import * as csv from 'csv-stringify';

function extractCsvHeaders(data) {
  const keys = data.map((ele) => Object.keys(ele)).flat();
  return [...new Set(keys)];
}

function generateCsvStringifier(columns) {
  const stringifier = csv.stringify({
    header: true,
    columns,
  });
  return stringifier;
}

export default {
  extractCsvHeaders,
  generateCsvStringifier,
};
