
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class cotizacionesServices {
  
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9100/api/cotizaciones'

 

  getAll(){
    const httpOptions = {
      headers: new HttpHeaders({
        'autorizado':localStorage.getItem('user_token')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl,httpOptions)
    );
  }

  register(formValue:any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/register`,formValue)
    )
  }


  //constructor() { }
}
