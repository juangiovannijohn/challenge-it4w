import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Agify } from 'src/app/models/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgifyService {

  url: string = environment.apiAgify
  constructor(
    private http:HttpClient
  ) {  }

  getAge(name:string):Observable<Agify>{
    let params = new HttpParams()
    .set('name', name)
    
    return this.http.get<Agify>(this.url, { params})
  }
}
