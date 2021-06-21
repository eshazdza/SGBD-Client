import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ObjectService {

    constructor() {
    }


    static getContentTypeFromExtension(extension: string): string {
        switch (extension) {
            case 'html':
                return 'text';
            case 'pdf':
                return 'blob';
            case 'json':
                return 'json';
            case 'xls':
                return 'blob';
            case 'xlsx':
                return 'blob';
            default:
                return 'text';
        }
    }

    static getExtension(path: string): string {
        return path.split('.').pop() as string;
    }
}
