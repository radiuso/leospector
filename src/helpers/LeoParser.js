import { map, isFunction } from 'lodash';
import { toDecimal, toInt, toDate } from './ValueParser';

export default class LeoParser {
    constructor() {
        this.columns = {
            date: { col: 0, parser: toDate },
            hour: { col: 1, },
            till_number: { col: 2, parser: toInt },
            saller_name: { col: 3,  },
            saller_number: { col: 4, parser: toInt },
            product_numer: { col: 7, parser: toInt },
            product_name: { col: 8, },
            product_price: { col: 12, parser: toDecimal },
            family_number: { col: 9, parser: toInt },
            family_name: { col: 10, },
            quantity: { col: 11, parser: toInt },
            total: { col: 13, parser: toDecimal },
        };
    }

    parse(data) {
        return map(data, (row) => {
            const obj = {};
            Object.keys(this.columns).forEach((key) => {
                const column = this.columns[key];
                let val = row[column.col];

                if (isFunction(column.parser)) {
                    val = column.parser(val);
                }
                obj[key] = val;
            });

            return obj;
        });
    }
}