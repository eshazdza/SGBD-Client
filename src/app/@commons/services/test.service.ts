import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { QueryParamService } from './query-param.service';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TestService extends BaseService {

    constructor(protected http: HttpClient,
                protected queryParamService: QueryParamService,
    ) {
        super('tests', http, queryParamService);
    }

    /**
     * @param filter
     * @param page
     * @param pageSize
     * @protected
     */
    list(filter?: any, page = 0, pageSize = 10): Observable<any> {
        return this.http.post<any>(
            this.path + '/byClass',
            {
                filter,
                page,
                pageSize,
            }
        );
    }

}

