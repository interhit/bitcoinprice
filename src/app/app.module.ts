import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Globals } from './app.globals'

import { AppComponent } from './app.component';
import { PriceboxComponent } from './components/pricebox/pricebox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceboxComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
