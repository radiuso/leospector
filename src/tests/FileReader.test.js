import fs from 'fs';
import { DateTime } from 'luxon';
import CSVReader from '../helpers/CSVReader';
import LeoParser from '../helpers/LeoParser';

it('read file without crashing', (done) => {
    const csvreader = new CSVReader();
    const file = fs.createReadStream('src/tests/files/simple_day.csv');

    csvreader.read(file)
    .then((result) => {
        expect(result).not.toBeNull();
        expect(result.errors).toEqual([]);
        expect(result.data).not.toEqual([]);
        done();
    })
    .catch((error) => {
        done.fail(error);
    });
});

it('read file and get objects', (done) => {
    const csvreader = new CSVReader();
    const file = fs.createReadStream('src/tests/files/simple_day.csv');

    csvreader.read(file)
    .then((result) => {
        const leoparser = new LeoParser();
        return leoparser.parse(result.data);
    })
    .then((result) => {
        expect(result).not.toBeNull();
        expect(result.errors).toBeUndefined();

        expect(result).not.toEqual([]);

        const firstRow = result[0];
        expect(firstRow.family_name).toEqual('BOISSONS FROIDES');
        expect(firstRow.total).toEqual(2);
        expect(firstRow.date).toEqual(DateTime.fromISO('2017-01-01'));
        done();
    })
    .catch((error) => {
        console.error(error);
        done.fail(error);
    });
});