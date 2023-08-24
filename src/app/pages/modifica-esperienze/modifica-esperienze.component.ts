import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica-esperienze',
  templateUrl: './modifica-esperienze.component.html',
  styleUrls: ['./modifica-esperienze.component.css'],
})
export class ModificaEsperienzeComponent implements OnInit {
  id!: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.ngOnInit();
    this.card();
  }
  card() {
    console.log('c');
  }
  ngOnInit() {
    console.log('c');

    this.route.paramMap.subscribe((params) => (this.id = params.get('id')!));
    console.log(this.id);
  }
}
