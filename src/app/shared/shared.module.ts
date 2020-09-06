import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    WellcomeComponent
  ],
  imports: [
    CommonModule,
    PoModule
  ],
  exports: [
    WellcomeComponent
  ]
})
export class SharedModule { }
