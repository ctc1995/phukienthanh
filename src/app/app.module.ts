import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GetHttp } from './core/getHttp.service'
import { SharpService } from './core/sharp.serivce'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module'
import { FooterModule } from './footer/footer.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
    SharpService,
    GetHttp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
