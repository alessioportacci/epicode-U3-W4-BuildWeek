import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  lingue: string[] = [
    'Italiano (Italiano)',
    'English (Inglese)',
    'Español (Spagnolo)',
    'Français (Francese)',
  ];

  linguaSelezionata: string = 'Italiano (Italiano)';

  onClick(lingua: string) {
    this.linguaSelezionata = lingua;
  }
}
