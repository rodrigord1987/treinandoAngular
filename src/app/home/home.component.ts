import { Component, OnInit } from '@angular/core';
import { PoNotificationService } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [
    { name: 'Alexandre', lastDate: new Date() },
    { name: 'Maria', lastDate: new Date() },
  ];

  constructor(private poNotification: PoNotificationService,
              private router: Router) { }

  ngOnInit() {
  }

  navigateToZipCode(userName: string) {
    this.poNotification.information(`O usuário ${userName} quer pesquisar um CEP`)
    this.goToZipCode();
  }


  goToZipCode() {
    this.router.navigate(['/zipcode']);
  }


}
