import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class IsEqualValidator {

    /**
     * Checks two fields are equals to each other
     * @param targetControlName the name of the control containing the reference
     * @param inputControlName the name of the control to check
     * @param errorMessage custom error message to display
     */
    public isEqual(targetControlName: string, inputControlName: string, errorMessage = 'Values are not equal') {
        return (formGroup: FormGroup) => {
            if (targetControlName && inputControlName) {
                const targetControl = formGroup.get(targetControlName);
                const inputControl = formGroup.get(inputControlName);
                if (targetControl && inputControl) {
                    if (inputControl.value) {
                        return (targetControl.value !== inputControl.value)
                            ? {isEqualError: true, isEqualMessage: errorMessage}
                            : null;
                    } else {
                        return null;
                    }
                } else {
                    throw new Error('\ Control not found in FormGroup \n in isEqual() \n in IsEqualValidator. \n');
                }
            } else {
                throw new Error('\ Control Name must be provided \n in isEqual() \n in IsEqualValidator. \n');
            }
        };
    }
}
