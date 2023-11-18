import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Digimons } from 'src/app/models/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigiserviceService {
  url: string = environment.apiUrl
  constructor(
    private http:HttpClient
  ) {  }

  getList( pageSize:number = 20, page:number = 0, attribute?:string, level?:string ): Observable<Digimons> {
    const url: string  = 'http://localhost:3000/digimons'
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
      .set('Allow', 'GET, POST, OPTIONS, PUT, DELETE');


    let params = new HttpParams()
    .set('pageSize', pageSize.toString())
    .set('page', page.toString());
    if (attribute) {
      params = params.set('attribute', attribute);
    }
    if (level) {
      params = params.set('level', level);
    }

    return this.http.get<Digimons>(this.url, {headers, params})

  }
}
