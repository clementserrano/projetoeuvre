import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ProprietaireService} from "../shared/proprietaire/proprietaire.service";

@Component({
  selector: 'app-ajout-oeuvre',
  templateUrl: './ajout-oeuvre.component.html',
  styleUrls: ['./ajout-oeuvre.component.css']
})
export class AjoutOeuvreComponent implements OnInit {

  proprietaires: Array<any>;

  constructor(private proprietaireService: ProprietaireService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Ajouter une Oeuvre");

    this.proprietaireService.getAll().subscribe(data => {
      this.proprietaires = data;
    })
  }

}
