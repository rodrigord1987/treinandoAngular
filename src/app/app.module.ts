import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { SexPipe } from './shared/pipes/sex.pipe';
// Importação do módulo de tradução
import { PoI18nModule } from '@portinari/portinari-ui';
import { PoI18nConfig } from '@portinari/portinari-ui';

import { generalPt } from './shared/literals/i18n/general-pt';
import { generalEn } from './shared/literals/i18n/general-en';
import { generalEs } from './shared/literals/i18n/general-es';
import { BeerService } from './shared/services/beer.service';
import { WellcomeComponent } from './shared/components/wellcome/wellcome.component';

const i18nConfig: PoI18nConfig = {
  default: {
    language: localStorage.getItem('user.language') || navigator.language,
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn,
      'es': generalEs
    }
  }
};

@NgModule({
  // Aqui nos declarations serão incluidos os componentes, pipes e diretivas
  declarations: [
    AppComponent,
    SexPipe
  ],
  // Aqui nos imports vamos informar os módulos que devem ser importados
  imports: [
    AppRoutingModule,
    BrowserModule,
    PoModule,
    FormsModule,
    PoI18nModule.config(i18nConfig),
    RouterModule.forRoot([])
  ],
  // Aqui nos providers vamos informar os serviços que farão parte dos módulos
  providers: [
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
