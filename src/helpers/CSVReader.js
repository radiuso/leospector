import Papa from 'papaparse';
import { isEmpty } from 'lodash';

export default class CSVReader {
    read(file) {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                delimiter: '\t',
                download: true,
                complete: (results) => {
                    if (!isEmpty(results.errors)) {
                        return reject(results);
                    }

                    return resolve(results);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    }
}