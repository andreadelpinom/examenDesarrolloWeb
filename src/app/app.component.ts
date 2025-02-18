import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, CarruselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamenDesarrolloWeb';
}
