import { Component, OnInit } from '@angular/core';
import { CepService } from '../shared/services/cep.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  cep = '';
  cepResponse = {};
  lastDate = new Date();

  constructor(private cepService: CepService,
              private router: Router,
              private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cep = this.activedRoute.snapshot.paramMap.get('zipcode');

    if (this.cep && this.cep !== '') {
      this.getCep();
    }
  }

  getCep(): void {
    this.cepService.getById(this.cep).subscribe((response) => {
      this.cepResponse = response;
    });
  }

  navigateToZipCode(userName: string) {
  }

  newZipCode() {
    this.router.navigate(['zipcode/new']);
  }

  editZipCode() {
    this.router.navigate(['zipcode/edit', 89220720]);
  }
}
