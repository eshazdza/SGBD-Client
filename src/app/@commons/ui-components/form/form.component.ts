import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormService } from './service/form.service';
import { FormGroup } from '@angular/forms';
import { BaseInput } from '../../abstract/base-input';
import { SubmitEnum } from './enums/submit.enum';

@Component({
    selector: 'app-sgbd-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    @Input() formDefinition: BaseInput<any>[] | undefined;
    @Input() groupValidators: any[] | undefined;
    @Input() resetOnSubmit = true;

    @Output() valueChange = new EventEmitter<any>();
    @Output() formSubmit = new EventEmitter<any>();

    form: FormGroup | undefined;
    payload = {};

    constructor(
        private formService: FormService,
    ) {
    }

    ngOnInit(): void {
        if (this.formDefinition) {
            this.form = this.formService.buildForm(this.formDefinition, this.groupValidators);
        }
    }

    onSubmit(key?: SubmitEnum | string): void {
        const values = this.form?.getRawValue();
        switch (key) {
            case SubmitEnum.SUBMITANDNEXT :
                values.submitAndNext = true;
                break;
            case SubmitEnum.SUBMITANDADD:
                values.submitAndAdd = true;
                break;
            default :
                values.submit = true;
                break;
        }

        this.formSubmit.emit(values);

        if (this.resetOnSubmit) {
            this.form?.reset();
        }
    }

    onValueChange($event: any): void {
        this.valueChange.emit($event);
    }
}
