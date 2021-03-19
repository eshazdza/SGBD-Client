import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class DateValidator {

    /**
     * Checks if a date is before another one
     * @param targetControlName the name of the control containing the reference cutoff date
     * @param inputControlName the name of the control to check
     * @param errorMessage custom error message to display
     */
    public isBefore(targetControlName: string, inputControlName: string, errorMessage = 'Input date is after cutoff date') {
        return (formGroup: FormGroup) => {
            if (targetControlName && inputControlName) {
                const targetControl = formGroup.get(targetControlName);
                const inputControl = formGroup.get(inputControlName);
                if (targetControl && inputControl) {
                    if (inputControl.value) {
                        return (targetControl.value < inputControl.value)
                            ? {isBeforeError: true, isBeforeMessage: errorMessage}
                            : null;
                    } else {
                        return null;
                    }
                } else {
                    throw new Error('\ Control not found in FormGroup \n in isBefore() \n in DateValidator. \n');
                }
            } else {
                throw new Error('\ Control Name must be provided \n in isBefore() \n in DateValidator. \n');
            }
        };
    }

    /**
     * Checks if a date is after another one
     * @param targetControlName the name of the control containing the reference cutoff date
     * @param inputControlName the name of the control to check
     * @param errorMessage custom error message to display
     */
    public isAfter(targetControlName: string, inputControlName: string, errorMessage = 'Input date is before cutoff date') {
        return (formGroup: FormGroup) => {
            if (targetControlName && inputControlName) {
                const targetControl = formGroup.get(targetControlName);
                const inputControl = formGroup.get(inputControlName);
                if (targetControl && inputControl) {
                    if (inputControl.value) {
                        return (targetControl.value > inputControl.value)
                            ? {isAfterError: true, isAfterMessage: errorMessage}
                            : null;
                    } else {
                        return null;
                    }
                } else {
                    throw new Error('\ Control not found in FormGroup \n in isAfter() \n in DateValidator. \n');
                }
            } else {
                throw new Error('\ Control Name must be provided \n in isAfter() \n in DateValidator. \n');
            }
        };
    }
}
