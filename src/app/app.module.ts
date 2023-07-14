import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesModule } from './heroes/heroes.module';
import { ListComponent } from './heroes/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent,
    HeroesModule,
  ],
  imports: [
    BrowserModule,
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
