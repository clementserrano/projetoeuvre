import { Component, OnInit } from '@angular/core';
import {AdherentService} from "../shared/adherent/adherent.service";

@Component({
  selector: 'app-liste-adherent',
  templateUrl: './liste-adherent.component.html',
  styleUrls: ['./liste-adherent.component.css']
})
export class ListeAdherentComponent implements OnInit {

  adherents: Array<any>;

  constructor(private adherentService : AdherentService) { }

  ngOnInit() {
    this.adherentService.getAll().subscribe(data => {
      this.adherents = data;
    })
  }

}
