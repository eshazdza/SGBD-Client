import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { ObjectService } from './object.service';
import { QueryParamService } from "./query-param.service";

@Injectable({
    providedIn: 'root'
})
export class TestResultsService extends BaseService {

    constructor(
        protected http: HttpClient,
        protected queryParamService: QueryParamService,
    ) {
        super('usertests', http, queryParamService);
    }

    downloadBulletin(): void {

    }

    findFileByKey(fileKey: string): Observable<any> {
        return this.http.get(
            this.queryParamService.addExtraQueryParams(
                new Map([
                    ['fileKey', fileKey]
                ]),
                `${this.path}`
            ),
            {responseType: ObjectService.getContentTypeFromExtension(ObjectService.getExtension(fileKey))}
        );
    }

}
