 // Определение компонента app.component
// импорт декоратора Component из модуля @angular/core
import { Component } from '@angular/core';

 // Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
  	moduleId: module.id,
  	selector: 'my-app',                  // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
  	templateUrl: 'app.component.html',
  	styleUrls: ["app.component.css"], // HTML разметка определяющая представление текущего компонента
})

export class AppComponent {
} // Класс определяющий поведение компонента
