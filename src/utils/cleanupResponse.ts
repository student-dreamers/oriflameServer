import { AbstractModel } from './../model/AbstractModel';

export function cleanupResponse(row: any) {
    const rowCopy = row.toJSON();

    rowCopy.id = undefined;
    return rowCopy;
}
