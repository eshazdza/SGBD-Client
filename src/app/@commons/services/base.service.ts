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

    getAll(): Observable<any> {
        return this.http.get(this.path);
    }

    getById(id: string): Observable<any> {
        return this.http.get(this.path + '/' + id);
    }

    /**
     * @param filter
     * @param page
     * @param pageSize
     * @protected
     */
    list(filter?: any, page = 0, pageSize = 10): Observable<any> {
        return this.http.post<any>(
            this.path + '/list',
            {
                filter,
                page,
                pageSize,
            }
        );
    }

    post(entity: any): Observable<any> {
        return this.http.post(this.path, entity);
    }

    /**
     * @param entity
     */
    upsert(entity: any): Observable<any> {
        return this.http.post<any>(this.path, entity);
    }
}
