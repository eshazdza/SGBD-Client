import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CoursService extends BaseService {

    constructor(
        protected http: HttpClient,
    ) {
        super('classes', http);
    }



}
