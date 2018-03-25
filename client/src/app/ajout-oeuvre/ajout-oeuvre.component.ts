import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-ajout-oeuvre',
  templateUrl: './ajout-oeuvre.component.html',
  styleUrls: ['./ajout-oeuvre.component.css']
})
export class AjoutOeuvreComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Ajouter une Oeuvre");
  }

}
