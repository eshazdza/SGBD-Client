import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { QueryParamService } from './query-param.service';
import { environment } from '../../../environments/environment';
import { from, Observable } from 'rxjs';

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


    downloadBulletin(id: string): void {
        const filename = 'bulletin.pdf';
        from(this.http.get(environment.API_BASE + '/documents/user/' + id, {responseType: 'blob'})).subscribe((result) => {
            // Handle IE10+
            if (navigator.msSaveBlob) {
                return navigator.msSaveBlob(result, filename);
            } else {
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(result);
                downloadLink.download = filename;
                downloadLink.click();
                return;
            }
        });
    }
}
