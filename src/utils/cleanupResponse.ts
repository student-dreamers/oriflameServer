import { AbstractModel } from './../model/AbstractModel';
import { isNull, isUndefined } from 'util';

export function cleanupResponse(row: any, cloned = false) {
    if (!cloned) {
        row = JSON.parse(JSON.stringify(row));
    }

    for (const key of Object.keys(row)) {
        if (/^(.*\_)?id$/g.test(key)) {
            row[key] = undefined;
        } else if (isNull(row[key])) {
        } else if (isUndefined(row[key])) {
        } else if (typeof row[key] === 'object') {
            row[key] = cleanupResponse(row[key], true);
        }
    }

    return row;
}
