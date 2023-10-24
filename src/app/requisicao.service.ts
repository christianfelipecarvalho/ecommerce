import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    private http: HttpClient
  ) { }

  del(_rota:string){
    return this.http.delete("http://localhost:8080" + _rota);
  }


  get(_rota:string = '/',_params:any = {}){
    return this.http.get(
      "http://localhost:8080" + _rota,
      {params:_params}
    );
  }

  post(formData:any,rota:string = ''){

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:8080' + rota,formData,httpOptions);
  }

  put(formData:any, rota:string = ''){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'application/json'
      })
    };
    return this.http.put('http://localhost:8080/' + rota,formData,httpOptions);
  }
}
