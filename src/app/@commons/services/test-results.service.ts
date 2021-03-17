import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TestResultsService extends BaseService{

  constructor(
      protected http: HttpClient,
  ) {
    super('usertests', http);
  }
}
