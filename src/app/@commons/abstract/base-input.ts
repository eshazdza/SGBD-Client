import { SubmitEnum } from '../ui-components/form/enums/submit.enum';

export class BaseInput<T> {
    value?: T;
    key: string | SubmitEnum;
    label?: string;
    order?: number;
    controlType?: string;
    type?: string;
    options?: { key: string, value: string }[];
    validators?: any[];
    readonly?: boolean;
    inputStyle = '';
    labelStyle = '';
    groupStyle = '';

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        order?: number;
        controlType?: string;
        type?: string;
        options?: { key: string, value: string }[];
        validators?: any[];
        readonly?: boolean;
        inputStyle?: string;
        labelStyle?: string;
        groupStyle?: string;
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
        this.validators = options.validators || [];
        this.readonly = options.readonly || false;
        this.inputStyle = options.inputStyle || '';
        this.labelStyle = options.labelStyle || '';
        this.groupStyle = options.groupStyle || '';
    }
}
