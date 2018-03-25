import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) {
  }

  add(reservation): void {
    this.http.post('//localhost:8080/reservation/add', reservation);
  }

}
