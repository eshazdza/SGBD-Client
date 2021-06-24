import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { QueryParamService } from './query-param.service';

@Injectable({
    providedIn: 'root'
})
export class TestService extends BaseService {

    constructor(protected http: HttpClient,
                protected queryParamService: QueryParamService,
    ) {
        super('tests', http, queryParamService);
    }
}
