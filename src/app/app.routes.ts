import {Routes} from '@angular/router';
import {CounterComponent} from './pages/counter/counter.component';
import {NameComponent} from './pages/base/name.component';
import {HeroComponent} from './pages/hero/hero.component';
import {DragonBallComponent} from './pages/dragonball/dragonball.component';

export const routes: Routes = [

  // Lista de rutas
  {
    path: '',
    component: NameComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'dragonball',
    component: DragonBallComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
