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
  oeuvre: any;
  adherents: Array<any>;

  constructor(private route: ActivatedRoute,
              private titleService: Title,
              private oeuvreventeService: OeuvreventeService,
              private reservationService: ReservationService,
              private adherentService: AdherentService) {
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
      this.oeuvre = data;
    })
  }

}
