import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { QueryParamService } from './query-param.service';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { InscriptionEntity } from "../entities/inscription.entity";
import { UserEntity } from "../entities/user.entity";

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


    getUnregistered(id: string): Observable<any> {
        return this.http.get(this.path + '/unregistered/' + id);
    }

    register(uuid: any, user: UserEntity): Observable<InscriptionEntity> {
        return this.http.post<InscriptionEntity>(environment.API_BASE + '/inscriptions',
            {
                user,
                role: {id: 7},
                classe: {uid: uuid}
            });
    }
}
