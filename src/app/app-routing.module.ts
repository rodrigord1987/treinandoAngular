import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // Quando houver navegação para o /zipcode o angular irá carregar o módulo
    // ZipcodeModule
    path: 'zipcode',
    loadChildren: () => import('./zipcode/zipcode.module')
                       .then((module) => module.ZipcodeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
                       .then((module) => module.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
