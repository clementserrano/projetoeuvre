import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppComponent} from "./app.component";
import {ListeAdherentComponent} from "./liste-adherent/liste-adherent.component";


import {AdherentService} from "./shared/adherent/adherent.service";


@NgModule({
  declarations: [
    AppComponent,
    ListeAdherentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [AdherentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
