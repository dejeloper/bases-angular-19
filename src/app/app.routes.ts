import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { NameComponent } from './pages/base/name.component';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';

export const routes: Routes = [

  // Lista de rutas 
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'base',
    component: NameComponent
  }
];
