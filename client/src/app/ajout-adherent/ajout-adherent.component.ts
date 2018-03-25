import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-ajout-adherent',
  templateUrl: './ajout-adherent.component.html',
  styleUrls: ['./ajout-adherent.component.css']
})
export class AjoutAdherentComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Ajouter un Adhérent");
  }

}
