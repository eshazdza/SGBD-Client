import { Injectable } from '@angular/core';
import { BaseInput } from '../../../abstract/base-input';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidatorsEnum } from '../enums/validators.enum';
import { DateValidator } from '../validators/date.validator';
import { IsEqualValidator } from '../validators/is-equal.validator';

@Injectable()
export class FormService {
    constructor(
        private dateValidator: DateValidator,
        private isEqualValidator: IsEqualValidator,
    ) {
    }

    /**
     * Builds a form from a form definition
     * @param  formDefinition
     * @param groupValidators
     */
    buildForm(formDefinition: BaseInput<any>[], groupValidators?: any[]): FormGroup {
        if (formDefinition) {
            return this.toFormGroup(formDefinition, groupValidators);
        } else {
            throw new Error('\n Form Definition Required \n in buildForm() \n in form.service.ts \n ');
        }
    }

    /**
     * Builds a form group from the provided inputs
     * Adds default values and validations rules.
     * @param inputs : Array of inputs fields to build a FormGroup around
     * @param groupValidators : object definition of a group validator to instantiate
     * @return FormGroup
     * @private
     */
    private toFormGroup(inputs: BaseInput<string>[], groupValidators?: any[]): FormGroup {
        const group: any = {};
        const groupValidatorsFn: any[] = [];

        inputs.forEach(input => {
            this.validateInputDefintion(input);

            group[input.key] =
                new FormControl(input.value);

            // Add validators if specified
            if (input.validators && input.validators.length) {
                group[input.key].setValidators(input.validators);
            }
        });

        if (groupValidators && groupValidators.length) {
            groupValidators.forEach(groupValidator => {
                switch (groupValidator.validator) {
                    case ValidatorsEnum.DATEBEFORE :
                        groupValidatorsFn.push(
                            this.dateValidator.isBefore(
                                groupValidator.targetControlName, groupValidator.inputControlName, groupValidator?.errorMessage
                            )
                        );
                        break;
                    case ValidatorsEnum.DATEAFTER :
                        groupValidatorsFn.push(
                            this.dateValidator.isAfter(
                                groupValidator.targetControlName, groupValidator.inputControlName, groupValidator?.errorMessage
                            )
                        );
                        break;
                    case ValidatorsEnum.ISEQUAL:
                        groupValidatorsFn.push(
                            this.isEqualValidator.isEqual(
                                groupValidator.targetControlName, groupValidator.inputControlName, groupValidator?.errorMessage
                            )
                        );
                        break;
                    default:
                        throw new Error('\n Validator not found. \n in toFormGroup() \n in form.service.ts \n ');
                }
            });

            return new FormGroup(group, {validators: groupValidatorsFn});
        } else {
            return new FormGroup(group);
        }
    }

    /**
     * Validate an input definition
     * @param input
     * @private
     */
    private validateInputDefintion(input: BaseInput<string>): BaseInput<any> {
        if (input.key) {
            switch (input.type) {
                case 'select':
                    if (!input.options || !input.options.length) {
                        console.error(`\n Options required for Select field.`);
                        console.error(input);
                        throw new Error('\n Options required for Select field. \n in buildInputField() \n in form.service.ts \n ');
                    } else {
                        return input;
                    }
                default :
                    return input;
            }
        } else {
            console.error(`Input Key required`);
            console.error(input);
            throw new Error(`\n Input Key required. \n in buildInputField() \n in form.service.ts \n`);
        }
    }

    private findControl(group: any, controlName: any): FormControl {
        if (group.hasOwnProperty(controlName)) {
            return group[controlName];
        } else {
            console.error('form group : ');
            console.error(group);
            console.error('control to find :');
            console.error(controlName);
            throw new Error(`\n Control not found. \n in findControl() \n in form.service.ts \n`);
        }
    }
}
