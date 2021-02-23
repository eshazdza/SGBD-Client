import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export class BaseService {

    path: string;

    constructor(
        path: string,
        protected http: HttpClient,
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
