import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseInput } from '../../../abstract/base-input';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SubmitEnum } from '../enums/submit.enum';

@Component({
    selector: 'app-sgbd-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

    @Input() inputDefinition: BaseInput<any> | undefined;
    @Input() form: FormGroup | undefined;

    @Output() inputValueChange = new EventEmitter<any>();
    @Output() submitEmitter = new EventEmitter<SubmitEnum | string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    get(control: string): AbstractControl {
        if (!this.form) {
            throw new Error('\n Undefined form \n In get() \n In FormInputComponent');
        } else {
            const formControl = this.form.get(control);
            if (formControl) {
                return formControl;
            } else {
                throw new Error('\n Control not found in form \n in get() \n in FormInputComponent');
            }
        }
    }

    onChange(value: Event, inputName: string): void {
        this.inputValueChange.emit({inputName, value});
    }

    onSubmit(key: SubmitEnum | string): void {
        this.submitEmitter.emit(key);
    }
}
