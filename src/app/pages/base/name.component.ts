import {Component} from "@angular/core";

@Component({
  template: `
    <p>Nombre: {{name}}</p>
    <p>Edad: {{ age }}</p>
    <p>Suma: {{numero + 100}}</p>`,
  styles: [
    `
    p {
      color: red;
    }
  `,
  ],
})
export class NameComponent {
  name: string = "Jhonatan";
  age: number = 25;
  numero: number = 10;
}


