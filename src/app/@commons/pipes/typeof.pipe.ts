import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'typeof',
})
export class TypeOfPipe implements PipeTransform {
    transform(value: any, ...args: any): any {
        return typeof value;
    }
}
