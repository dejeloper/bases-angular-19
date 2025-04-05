import {Component, computed, signal} from "@angular/core";
import {UpperCasePipe} from "@angular/common";

@Component({
  templateUrl: './hero.component.html',
  imports: [
    UpperCasePipe
  ]
})
export class HeroComponent {
  name = signal("Ironman");
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  });

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero() {
    this.name.set("Spiderman");
    this.age.set(30);
  }

  resetHero() {
    this.name.set("Ironman");
    this.age.set(45);
  }

  changeAge() {
    this.age.update(age => 60);
  }
}
