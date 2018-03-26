import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) {
  }

  add(reservation): Observable<any> {
    return this.http.post('//localhost:8080/reservation/add', reservation);
  }

}
