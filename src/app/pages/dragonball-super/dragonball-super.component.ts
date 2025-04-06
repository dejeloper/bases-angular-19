import {Component, inject} from "@angular/core";
import {CharacterListComponent} from "../../components/dragonball/character-list/character-list.component";
import {CharacterAddComponent} from "../../components/dragonball/character-add/character-add.component";
import {DragonballService} from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonBallSuperComponent {

  // constructor( private DragonballService: DragonballService) {}
  public dragonballService = inject(DragonballService);



}
