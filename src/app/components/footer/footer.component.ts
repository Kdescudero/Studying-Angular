import { Component } from "@angular/core";

@Component({
  selector    : "app-footer",
  styleUrls   : ["./footer.component.css"],
  templateUrl : "./footer.component.html",
})

export class FooterComponent {
  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }
}
