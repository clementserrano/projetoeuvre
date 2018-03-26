import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {AdherentService} from "../shared/adherent/adherent.service";

@Component({
  selector: 'app-ajout-adherent',
  templateUrl: './ajout-adherent.component.html',
  styleUrls: ['./ajout-adherent.component.css']
})
export class AjoutAdherentComponent implements OnInit {

  txtnom;
  txtprenom;
  txtville;

  constructor(private router: Router,
              private adherentService: AdherentService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Ajouter un Adhérent");
  }

  onSubmit() {
    var adherent = {
      nomAdherent: this.txtnom,
      prenomAdherent: this.txtprenom,
      villeAdherent: this.txtville,
    }
    this.adherentService.add(adherent);
  }

}
