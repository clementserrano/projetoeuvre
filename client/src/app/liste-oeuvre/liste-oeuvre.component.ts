import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-liste-oeuvre',
  templateUrl: './liste-oeuvre.component.html',
  styleUrls: ['./liste-oeuvre.component.css']
})
export class ListeOeuvreComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Affichage de toutes les oeuvres en vente");
  }

}
