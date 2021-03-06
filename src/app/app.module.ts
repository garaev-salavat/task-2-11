import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { COneComponent } from './c-one/c-one.component';
import { CTwoComponent } from './c-two/c-two.component';
import { CThreeComponent } from './c-three/c-three.component';
import { CFourComponent } from './c-four/c-four.component';
import { NoPrefixComponent } from './no-prefix/no-prefix.component';

@NgModule({
  declarations: [
    AppComponent,
    COneComponent,
    CTwoComponent,
    CThreeComponent,
    CFourComponent,
    NoPrefixComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
