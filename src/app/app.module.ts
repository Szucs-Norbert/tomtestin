/*
*File:app.module.ts
*Author: Szűcs Norbert
*Copyright: 2022, Szűcs Norbert
*Group: Szoft II/N
*Date:2022.01.13
*Github:https://github.com/Szucs-Norbert
*Feladat: 0323
*Program feladata: Testömegindex kiszámítása
*/

import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }