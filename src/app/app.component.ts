import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './shared/menu/menu.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { RecursosService } from './servicios/recursos.service';
import { Data } from './interfaz/data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, CarruselComponent, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamenDesarrolloWeb';

  datas : Data[]=[];

  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta=>{this.datas=respuesta.datas as Array<Data>;})
  }
}
