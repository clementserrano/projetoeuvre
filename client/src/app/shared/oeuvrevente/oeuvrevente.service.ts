import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OeuvreventeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/oeuvrevente/getAll');
  }

  get(idOeuvrevente): Observable<any> {
    //let param = new HttpParams().set("idOeuvrevente",idOeuvrevente);
    return this.http.get('//localhost:8080/oeuvrevente/get', idOeuvrevente);
  }

  add(oeuvrevente): void {
    this.http.post('//localhost:8080/oeuvrevente/add', oeuvrevente);
  }

}
