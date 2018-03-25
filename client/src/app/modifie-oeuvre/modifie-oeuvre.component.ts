import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {OeuvreventeService} from "../shared/oeuvrevente/oeuvrevente.service";
import {ProprietaireService} from "../shared/proprietaire/proprietaire.service";

@Component({
  selector: 'app-modifie-oeuvre',
  templateUrl: './modifie-oeuvre.component.html',
  styleUrls: ['./modifie-oeuvre.component.css']
})
export class ModifieOeuvreComponent implements OnInit {

  idOeuvre: number;
  oeuvre: any;
  proprietaires: Array<any>;

  constructor(private route: ActivatedRoute,
              private titleService: Title,
              private oeuvreventeService: OeuvreventeService,
              private proprietaireService: ProprietaireService) {
  }

  ngOnInit() {
    this.titleService.setTitle("Expo : Médiathèque De POLYTECH");

    this.route.params.subscribe(params => {
      this.idOeuvre = +params['idOeuvre'];
    })

    this.proprietaireService.getAll().subscribe(data => {
      this.proprietaires = data;
    })

    this.oeuvreventeService.get(this.idOeuvre).subscribe(data => {
      this.oeuvre = data;
    })
  }

}
