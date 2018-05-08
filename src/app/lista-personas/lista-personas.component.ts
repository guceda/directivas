import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  lista:Array<any>
  formulario:any
  mostrarAsignaturas:boolean;

  constructor() {
    this.mostrarAsignaturas = false;
    this.lista = [
      {nombre:'Rosa', apellidos:'García', edad:23, asignaturas: ['Matemáticas', 'Física']},
      {nombre:'Ramón', apellidos:'Gonzalez', edad:45, asignaturas: ['Inglés', 'Física']},
      {nombre:'Antonio', apellidos:'Ramirez', edad:34, asignaturas: ['Matemáticas', 'Física','Rumano']},
      {nombre:'Rosa', apellidos:'García', edad:23, asignaturas: ['Anatomía','Matemáticas', 'Física']},
      {nombre:'Ramón', apellidos:'Gonzalez', edad:45, asignaturas: ['Programación','Matemáticas', 'Física']},
      {nombre:'Antonio', apellidos:'Ramirez', edad:34, asignaturas: ['Física']},
      {nombre:'Rosa', apellidos:'García', edad:23, asignaturas: ['Medicina', 'Física']},
      {nombre:'Ramón', apellidos:'Gonzalez', edad:45, asignaturas: ['Anatomía','Matemáticas', 'Física']},
      {nombre:'Antonio', apellidos:'Ramirez', edad:34, asignaturas: ['Matemáticas', 'Física']}
    ]
    this.formulario = {
      nombre:"",
      apellidos:"",
      edad:"",
    }
   }

  ngOnInit() {
  }
  handleClick(){
    this.lista.push({
      nombre: this.formulario.nombre,
      apellidos: this.formulario.apellidos,
      edad: this.formulario.edad
    })
    this.formulario.nombre = ""
    this.formulario.apellidos = ""
    this.formulario.edad = ""
  }

}
