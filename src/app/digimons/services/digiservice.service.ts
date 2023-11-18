import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DigimonDetail, Digimons } from 'src/app/models/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigiserviceService {
  url: string = environment.localApiUrl
  constructor(
    private http:HttpClient
  ) {  }

  getList(list:string = 'digimons', pageSize:number = 20, page:number = 0, attribute?:string, level?:string ): Observable<Digimons> {
    let params = new HttpParams()
    .set('pageSize', pageSize.toString())
    .set('page', page.toString());
    if (attribute) {
      params = params.set('attribute', attribute);
    }
    if (level) {
      params = params.set('level', level);
    }
    return this.http.get<Digimons>(this.url+list, { params})

  }
  getDetailInfo(list:string = 'digimons', digiId: number): Observable<DigimonDetail>{
    return this.http.get<DigimonDetail>(this.url+list+'/'+digiId)
  }
}
