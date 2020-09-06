import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZipcodeRoutingModule } from './zipcode-routing.module';
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';
import { ZipcodeComponent } from './zipcode.component';
import { CepService } from '../shared/services/cep.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // Informa para o módulo que o componente de CEP faz parte dele
    ZipcodeComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    FormsModule,
    ZipcodeRoutingModule,
    SharedModule
  ],
  providers: [
    // Importa o serviço que busca o CEP
    CepService
  ]
})
export class ZipcodeModule { }
