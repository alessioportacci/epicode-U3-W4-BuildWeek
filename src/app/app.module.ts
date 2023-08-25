import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { EsperienzeComponent } from './pages/esperienze/esperienze.component';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { ModificaEsperienzeComponent } from './pages/modifica-esperienze/modifica-esperienze.component';
import { DateDayPipe } from './pipes/date-day.pipe';
import { FormazioneComponent } from './pages/formazione/formazione.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    EsperienzeComponent,
    DateFormatterPipe,
    ModificaEsperienzeComponent,
    DateDayPipe,
    FormazioneComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
