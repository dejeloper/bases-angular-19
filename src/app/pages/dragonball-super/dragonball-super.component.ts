import {Component, signal} from "@angular/core";
import type {Character} from "../../interfaces/character.interface";
import {CharacterListComponent} from "../../components/dragonball/character-list/character-list.component";
import {CharacterAddComponent} from "../../components/dragonball/character-add/character-add.component";

@Component({
  templateUrl: './dragonball-super.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonBallSuperComponent {
  characters = signal<Character[]>([
    {id: 1, name: 'Gokú', power: 9000},
    {id: 2, name: 'Vegeta', power: 8700},
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }

}
