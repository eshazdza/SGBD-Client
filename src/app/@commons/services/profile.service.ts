import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService{

  constructor(
      protected http: HttpClient,
  ) {
    super('users', http);
  }
}
