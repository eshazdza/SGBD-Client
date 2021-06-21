import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QueryParamService {
    public buildListQueryParams(from?: number, pageSize?: number, sortField?: string, sortOrder?: string): string {
        let queryParamString = '';
        queryParamString = this.concatKeyValue(queryParamString, 'from', from ? from.toString() : '');
        queryParamString = this.concatKeyValue(queryParamString, 'pageSize', pageSize ? pageSize.toString() : '');
        queryParamString = this.concatKeyValue(queryParamString, 'sortField', sortField ? sortField.toString() : '');
        queryParamString = this.concatKeyValue(queryParamString, 'sortOrder', sortOrder ? sortOrder.toString() : '');
        return (queryParamString);
    }

    /**
     * @param params map of query param
     * @param queryString base query string
     * build query params with null values exclude
     */
    public addExtraQueryParams(params: Map<string, string>, queryString: string): string {
        if (params && params.size > 0) {
            params.forEach((value, key) => {
                queryString = this.concatKeyValue(queryString, key, value);
            });
        }
        return queryString;
    }

    /**
     * @param queryString base query string
     * @param key key of the property (name)
     * @param value value of the property
     * contact param into query string => ?key=value if value is not null
     */
    public concatKeyValue(queryString: string, key: string, value: string): string {
        if (key && value && value.length > 0) {
            if (queryString.indexOf('?') >= 0) {
                queryString += '&';
            } else {
                queryString += '?';
            }
            return queryString += (encodeURIComponent(key) + '=' + encodeURIComponent(value));
        } else {
            return queryString;
        }
    }
}
