import { BaseInput } from '../abstract/base-input';
import { Validators } from '@angular/forms';
import { SubmitEnum } from "../ui-components/form/enums/submit.enum";

export class UserForm {
    definition = [
        {
            key: 'firstname',
            label: 'firstname',
            value: '',
            order: 1,
            type: 'text',
            validators: [Validators.required, Validators.minLength(5)],
            inputStyle: 'col-sm-7',
            labelStyle: 'col-sm-5',
            groupStyle : 'form-group row',
        } as BaseInput<any>,
        {
            key: 'lastname',
            label: 'lastname',
            value: '',
            order: 2,
            type: 'text',
            validators: [Validators.required, Validators.minLength(5)],
            inputStyle: 'col-sm-7',
            labelStyle: 'col-sm-5',
            groupStyle : 'form-group row',
        } as BaseInput<any>,
        {
            key: 'password',
            label: 'password',
            value: '',
            order: 3,
            type: 'password',
            validators: [Validators.required, Validators.minLength(5)],
            inputStyle: 'col-sm-7',
            labelStyle: 'col-sm-5',
            groupStyle : 'form-group row',
        } as BaseInput<any>,
        {
            key: 'confirmPassword',
            label: 'Confirm Password',
            value: '',
            order: 4,
            type: 'password',
            validators: [Validators.required, Validators.minLength(5)],
            inputStyle: 'col-sm-7',
            labelStyle: 'col-sm-5',
            groupStyle : 'form-group row',
        } as BaseInput<any>,
        {
            key: SubmitEnum.SUBMIT,
            label: 'Register',
            type: 'button',
        } as BaseInput<any>,
    ];
}
