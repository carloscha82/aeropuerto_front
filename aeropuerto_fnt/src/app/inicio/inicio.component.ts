import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  aviones:avion[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get('avion')
      .subscribe(data => {
        if(data){
          this.aviones = data;
          console.log(this.aviones)
        }
      })
  }
}

export interface avion {
  id:number,
  codigo_avion:string,
  tipo_avion:string,
  ciudad_base:string,
  marca:string
}
