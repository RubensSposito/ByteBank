import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localPt, 'pt')

@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    [{provide: LOCALE_ID, useValue: 'pt-BR' },{
      provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'
    }]

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
