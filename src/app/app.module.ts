import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceComponent } from './components/dice/dice.component';
import { MainComponent } from './components/main/main.component';
import { Page1Component } from './components/create/page1/page1.component';
import { Page2Component } from './components/create/page2/page2.component';
import { Page3Component } from './components/create/page3/page3.component';
import { Page4Component } from './components/create/page4/page4.component';
import { ViewComponent } from './components/view/view.component';
import { CharacterProviderService } from './model/character-provider.service';


@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    MainComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CharacterProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
