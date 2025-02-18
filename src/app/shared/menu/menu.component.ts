import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  boton1 : string ="Home"
  boton2 : string ="Dropdown"
  boton3 : string = "Disable"
  boton4 : string = "Search"
}
