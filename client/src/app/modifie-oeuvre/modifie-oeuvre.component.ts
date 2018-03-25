import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-modifie-oeuvre',
  templateUrl: './modifie-oeuvre.component.html',
  styleUrls: ['./modifie-oeuvre.component.css']
})
export class ModifieOeuvreComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Expo : Médiathèque De POLYTECH");
  }

}
