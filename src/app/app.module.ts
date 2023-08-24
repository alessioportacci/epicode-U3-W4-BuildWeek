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
import { ProfiliComponent } from './components/profili/profili.component';
import { EsperienzeComponent } from './pages/esperienze/esperienze.component';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { ModificaEsperienzeComponent } from './pages/modifica-esperienze/modifica-esperienze.component';
import { DateDayPipe } from './pipes/date-day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ProfiliComponent,
    EsperienzeComponent,
    DateFormatterPipe,
    ModificaEsperienzeComponent,
    DateDayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
