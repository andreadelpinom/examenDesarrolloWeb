import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interfaz/data';


@Injectable({
  providedIn: 'root'
})
export class RecursosService 
  {
      private apiUrl = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image'; 

      constructor(private http: HttpClient) {}

      obtenerDatos(): Observable<{ datas: Data[] }> {
        return this.http.get<{ datas: Data[] }>(this.apiUrl);

    }

  }
    
