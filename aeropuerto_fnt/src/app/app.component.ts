import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Reto 1
  /*
    title = 'aeropuerto_fnt';
    operacion: string = '';
    resultado: number = 0;


    sumar(num1: string, num2: string) {
      if(num1 === '' || num2 === ''){
        alert("Ingrese valores no vacios para realizar la suma");
        return;
      }
      this.resultado = parseInt(num1) + parseInt(num2);
      this.operacion = "SUMA";
    }

    restar(num1: string, num2: string) {
      if(num1 === '' || num2 === '' ){
        alert("Ingrese valores no vacios para realizar la resta");
        return;
      }
      this.resultado = parseInt(num1) - parseInt(num2);
      this.operacion = "RESTA";
    }

    multiplicar(num1: string, num2: string) {
      if(num1 === '' || num2 === '' ){
        alert("Ingrese valores no vacios para realizar la multiplicacion");
        return;
      }
      this.resultado = parseInt(num1) * parseInt(num2);
      this.operacion = "MULTIPLICACION";
    }

    dividir(num1: string, num2: string) {
      if(num1 === '' || num2 === '' ){
        alert("Ingrese valores no vacios para realizar la division");
        return;
      }

      if(num2 == '0'){
        alert("Error al realizar la division, el denominador no puede ser '0'");
        return;
      }

      this.resultado = parseInt(num1) / parseInt(num2);
      this.operacion = "DIVISION";
    }
  */

  // Reto 2
  /*
    nombres:string[] = ['Mario', 'Carlos', 'Sofia', 'Margarita', 'Pablo'];

    adicionarNombre(nombre: string) {
      this.nombres.push(nombre);
    }

    borrarNombre(nombre: string) {
      let index = this.nombres.indexOf(nombre);
      this.nombres.splice(index, 1);
    }
  */

  // Reto 3
/*    lista = [
      {nombre: 'Pablo', edad: 23},
      {nombre: 'Maria', edad: 34},
      {nombre: 'Fabio', edad: 45},
      {nombre: 'Carlos', edad: 34},
      {nombre: 'Luis', edad: 62},
      {nombre: 'Sofia', edad : 14},
    ]

    borrarPersona( persona: any){
      let index = this.lista.indexOf(persona);
      this.lista.splice(index, 1);
    }

    adicionarPersona(nombre: string, anio: string) {
      if(nombre === '' || anio === ''){
        alert("Ingrese valores no vacios");
        return;
      }

      let anioActual:number = new Date().getFullYear();
      let anioNacimiento: number = new Date(anio).getFullYear();
      let edad: number = anioActual - anioNacimiento;
      this.lista.push({nombre, edad});
    }*/

  // Reto 4
/*
  listaMarcas = [
    {
      'marca': 'Chevrolet',
      'modelos': [
        {'linea': 'Captiva', 'version': 'Lts'},
        {'linea': 'Spark GT', 'version': 'Lts'},
        {'linea': 'Spark Go', 'version': 'Lts'},
      ],
      'Disponibilidad': [
        {'ciudad': 'Medellin'},
        {'ciudad': 'Pasto'},
        {'ciudad': 'Bogota'},
        {'ciudad': 'Cali'},
      ]
    },
    {
      'marca': 'Volkswagen',
      'modelos': [
        {'linea': 'Gol', 'version': 'Trendline'},
        {'linea': 'Jetta', 'version': 'Confortline'},
        {'linea': 'Fox', 'version': 'Trendline'},
      ],
      'Disponibilidad': [
        {'ciudad': 'Pereira'},
        {'ciudad': 'Manizales'},
        {'ciudad': 'Bogota'},
        {'ciudad': 'Cali'},
      ]
    },
    {
      'marca': 'Renault',
      'modelos': [
        {'linea': 'Duster', 'version': 'Dynamique'},
        {'linea': 'Sandero', 'version': 'Dynamic'},
        {'linea': 'Logan', 'version': 'Authentique'},
      ],
      'Disponibilidad': [
        {'ciudad': 'Medellin'},
        {'ciudad': 'Pasto'},
        {'ciudad': 'Bogota'},
        {'ciudad': 'Cali'},
      ]
    },
    {
      'marca': 'Mazda',
      'modelos': [
        {'linea': 'Mazda 2', 'version': 'Dynamique'},
        {'linea': 'Mazda 3', 'version': 'Dynamic'},
        {'linea': 'CX5', 'version': 'Authentique'},
      ],
      'Disponibilidad': [
        {'ciudad': 'Pereira'},
        {'ciudad': 'Manizales'},
        {'ciudad': 'Bogota'},
        {'ciudad': 'Cali'},
      ]
    },
  ]

  addMarca(marca: string) {
    if(!marca){
      alert(`Ingrese una marca no vacios para agregar a la lista de marcas`);
      return;
    }

    this.listaMarcas.push({
      'marca': marca,
      'modelos':[],
      'Disponibilidad': []
    });
    alert(`Marca ${marca} agregada satisfactoriamente al final de la pagina`);
  }

  addModeloMarca(linea: string, version: string, marca: string) {
    if(!linea || !version){
      alert(`Ingrese una linea y marca no vacios para agregar de la marca ${marca}`);
      return;
    }

    this.listaMarcas.forEach(lista => {
      if (lista.marca === marca){
        lista.modelos.push({linea, version});
        return;
      }
    })
  }

  addCiudadMarca(ciudad: string, marca: string) {
    if(!ciudad){
      alert(`Ingrese una ciudad no vacia para agregar de la marca ${marca}`);
      return;
    }

    this.listaMarcas.forEach(lista => {
      if (lista.marca === marca){
        lista.Disponibilidad.push({ciudad});
        return;
      }
    })
  }

  editarModeloMarca(linea: string, version: string, indexModelo:number, marca: string) {
    if(!linea && !version){
      alert(`Ingrese una linea y version no vacia para editar en la marca ${marca}`);
      return;
    }

    this.listaMarcas.forEach(lista => {
      if(lista.marca === marca){
        if(linea)
          lista.modelos[indexModelo].linea = linea;
        if(version)
          lista.modelos[indexModelo].version = version;
        return;
      }
    });
  }

  editarCiudadMarca(ciudad: string, indexCiudad: number, marca: string) {
    if(!ciudad){
      alert(`Ingrese una ciudad no vacia para editar en la marca ${marca}`);
      return;
    }

    this.listaMarcas.forEach(lista => {
      if(lista.marca === marca){
        lista.Disponibilidad[indexCiudad].ciudad = ciudad;
        return;
      }
    });
  }

  eliminarModeloMarca(marca: string, index: number) {
    this.listaMarcas.forEach(lista => {
      if (lista.marca === marca){
        lista.modelos.splice(index, 1);
        return;
      }
    });
  }

  eliminarCiudadMarca(marca: string, index: number) {
    this.listaMarcas.forEach(lista => {
      if (lista.marca === marca){
        lista.Disponibilidad.splice(index, 1);
        return;
      }
    });
  }*/


}

