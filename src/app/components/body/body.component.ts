import { Component } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html"
})
export class BodyComponent {
  frase: any;
  mostrar: boolean;
  personajes: string[];

  constructor() {
    this.frase = {
      mensaje: "Un gran poder requiere una gran responsabilidad",
      autor: "Ben Parker"
    };

    this.mostrar = true;

    this.personajes = ["Spiderman", "Venom", "Dr.Octopus"];
  }
}
