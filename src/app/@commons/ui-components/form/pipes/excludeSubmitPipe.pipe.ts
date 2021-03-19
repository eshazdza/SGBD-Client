import { Pipe, PipeTransform } from '@angular/core';
import { SubmitEnum } from '../enums/submit.enum';

@Pipe({
    name: 'excludeSubmitPipe',
})
export class ExcludeSubmitPipePipe implements PipeTransform {
    transform(value: any, ...args: any): any {
        return value.filter((item: { key: SubmitEnum; }) =>
            (item.key !== SubmitEnum.SUBMIT && item.key !== SubmitEnum.SUBMITANDNEXT && item.key !== SubmitEnum.SUBMITANDADD)
        );
    }
}
