// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule
import { MaterializeModule } from 'angular2-materialize';
import { NgModule }      from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { routes } from "./app.router";

import { AppComponent } from './app.component';
import { Page1Component } from "./page1/page1.component";

// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf и ngFor
@NgModule({
  	imports: [ 
  		BrowserModule,
  		FormsModule,
  		routes,
  	],
  	declarations: [ AppComponent, Page1Component ], // корневой компонент данного приложения
  	bootstrap: [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { } 