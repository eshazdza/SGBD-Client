import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { QueryParamService } from './query-param.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoursService extends BaseService {

    constructor(
        protected http: HttpClient,
        protected queryParamService: QueryParamService,
    ) {
        super('classes', http, queryParamService);
    }


    get(): Observable<any> {
        return this.http.get(this.path);
    }
}
