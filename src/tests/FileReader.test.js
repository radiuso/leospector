import fs from 'fs';
import CSVReader from '../helpers/CSVReader';

it('read file without crashing', (done) => {
    const csvreader = new CSVReader();
    const file = fs.createReadStream('src/tests/files/simple_day.csv');

    csvreader.read(file)
    .then((rows) => {
        expect(rows).not.toBeNull();
        expect(rows.errors).toEqual([]);
        expect(rows.data).not.toEqual([]);
        done();
    })
    .catch((error) => {
        done.fail(error);
    });
});