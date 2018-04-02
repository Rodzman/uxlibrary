import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class PostsService {

  API_URL = 'https://www.mocky.io/v2/5a6bc16631000078341b8b77';

  constructor(private http: HttpClient) { }

  links(): Observable<any>{
    return this.http.get(`${this.API_URL}`)
  }

}
