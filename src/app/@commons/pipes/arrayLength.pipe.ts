import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayLength',
})
export class ArrayLengthPipe implements PipeTransform {
    transform(value: any, ...args: any): any {
        if (Array.isArray(value)) {
            return value.length;
        }
    }
}
