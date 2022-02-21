/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { HttpParams} from '@angular/common/http';
import { TypeSignalement } from './Model/type-signalement';

@Injectable({
  providedIn: 'root'
})
export class TypesignalementService {

  constructor(private http: HttpClient) { }

  Url2='http://localhost:8081/api/typeSignalement';

  getAllTypeSignalement()
  {
    return this.http.get<TypeSignalement[]>(this.Url2);
  }
}
