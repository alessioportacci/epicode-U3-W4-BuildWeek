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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ProfiliComponent,
    EsperienzeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    FormsModule,
    FooterComponent,
    ProfiliComponent,
    EsperienzeComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
