import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DumpComponent} from './dump/dump.component';
import {NgxElectronModule} from 'ngx-electron';
import {ClipboardService} from './clipboard.service';


@NgModule({
  declarations: [
    AppComponent,
    DumpComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule
  ],
  providers: [ClipboardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
