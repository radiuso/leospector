import Papa from 'papaparse';
import { isEmpty, slice } from 'lodash';

export default class CSVReader {
    read(file, config = {}) {

        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                delimiter: '\t',
                download: true,
                skipEmptyLines: true,
                complete: (results) => {
                    if (!isEmpty(results.errors)) {
                        return reject(results);
                    }

                    // get one dimentional array containing rows
                    // remove the header
                    results.data = slice(results.data, 1);

                    return resolve(results);
                },
                error: (error) => {
                    reject(error);
                },
                ...config,
            });
        });
    }
}