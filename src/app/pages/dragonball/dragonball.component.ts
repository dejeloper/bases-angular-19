import {NgClass} from "@angular/common";
import {Component, signal} from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball.component.html',
  imports: [NgClass]
})
export class DragonBallComponent {
  name = signal("");
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Gokú', power: 9000},
    {id: 2, name: 'Vegeta', power: 8700},
    {id: 3, name: 'Piccolo', power: 3000}
  ]);


  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update(
      (list) => [...list, newCharacter]
    );

    this.resetForm();
  }

  resetForm() {
    this.name.set("");
    this.power.set(0);
  }
}
