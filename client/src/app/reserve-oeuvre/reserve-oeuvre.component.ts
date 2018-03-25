import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-reserve-oeuvre',
  templateUrl: './reserve-oeuvre.component.html',
  styleUrls: ['./reserve-oeuvre.component.css']
})
export class ReserveOeuvreComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Réserver une oeuvre");
  }

}
