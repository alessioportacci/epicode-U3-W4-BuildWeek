import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EsperienzeComponent } from './pages/esperienze/esperienze.component';
import { ModificaEsperienzeComponent } from './pages/modifica-esperienze/modifica-esperienze.component';
import { FormazioneComponent } from './pages/formazione/formazione.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'profile/esperienze',
    component: EsperienzeComponent,
  },
  {
    path: 'profile/formazione',
    component: FormazioneComponent,
  },
  {
    path: 'modifica/:id',
    component: ModificaEsperienzeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
