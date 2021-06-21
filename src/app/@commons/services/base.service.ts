import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { QueryParamService } from './query-param.service';

export class BaseService {

    path: string;

    constructor(
        path: string,
        protected http: HttpClient,
        protected queryParamService: QueryParamService,
    ) {
        this.path = environment.API_BASE + '/' + path;
    }

    checkHealth(): Observable<any> {
        return this.http.get<any>(
            `${this.path}/health`,
        );
    }

    isTeaTime(): Observable<any> {
        return this.http.get<any>(
            `${this.path}/teapot`,
        );
    }

    get(): Observable<any> {
        return this.http.get(this.path);
    }

    /**
     * @param filters
     * @param page
     * @param pageSize
     * @protected
     */
    list(filters?: any, page = 0, pageSize = 10): Observable<any> {
        return this.http.post<any>(
            this.path,
            {
                filters,
                page,
                pageSize,
            }
        );
    }

    /**
     * @param entity
     */
    upsert(entity: any): Observable<any> {
        return this.http.post<any>(this.path, entity);
    }
}
