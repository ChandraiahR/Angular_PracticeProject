import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardcompComponent } from './cardcomp/cardcomp.component';
import { ListcompComponent } from './listcomp/listcomp.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { StatecompComponent } from './statecomp/statecomp.component';
import { CountrycompComponent } from './countrycomp/countrycomp.component';
import { ContentDirectiveComponent } from './content-directive/content-directive.component';
import { ClassDirectiveDirective } from './class-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardcompComponent,
    ListcompComponent,
    TestcompComponent,
    StatecompComponent,
    CountrycompComponent,
    ContentDirectiveComponent,
    ClassDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
