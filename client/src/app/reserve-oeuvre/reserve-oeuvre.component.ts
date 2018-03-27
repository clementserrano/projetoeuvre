import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {OeuvreventeService} from "../shared/oeuvrevente/oeuvrevente.service";
import {ReservationService} from "../shared/reservation/reservation.service";
import {AdherentService} from "../shared/adherent/adherent.service";

@Component({
  selector: 'app-reserve-oeuvre',
  templateUrl: './reserve-oeuvre.component.html',
  styleUrls: ['./reserve-oeuvre.component.css']
})
export class ReserveOeuvreComponent implements OnInit {

  idOeuvre: number;
  reservation: any;
  adherents: Array<any>;

  constructor(private route: ActivatedRoute,
              private titleService: Title,
              private oeuvreventeService: OeuvreventeService,
              private reservationService: ReservationService,
              private adherentService: AdherentService) {
    this.reservation = {
      oeuvrevente: {},
      adherent: {},
      dateReservation: null
    }
  }

  ngOnInit() {
    this.titleService.setTitle("Réserver une oeuvre");

    this.route.params.subscribe(params => {
      this.idOeuvre = +params['idOeuvre'];
    })

    this.adherentService.getAll().subscribe(data => {
      this.adherents = data;
    })

    this.oeuvreventeService.get(this.idOeuvre).subscribe(data => {
      this.reservation.oeuvrevente = data;
    })
  }

  result = {
    status: "",
    message: ""
  }

  bookOeuvre(){
    this.reservation.oeuvrevente.etatOeuvrevente = 'R';
    this.reservationService.add(this.reservation).subscribe(success => {
      this.result.status = "success";
      this.result.message = "L'oeuvre a été réservée avec succès !"
    }, error => {
      this.result.status = "error";
      this.result.message = "Erreur : L'oeuvre n'a pas pu être réservée."
    });
  }

}
