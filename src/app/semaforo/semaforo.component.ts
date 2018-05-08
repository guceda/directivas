import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

activoRojo:boolean
activoAmarillo:boolean
activoVerde:boolean


  constructor() {

      this.activoRojo = true
      this.activoAmarillo = false
      this.activoVerde = false
   }

  ngOnInit() {
    setInterval(()=>{
      if(this.activoRojo){
        this.activoRojo = false
        this.activoAmarillo = true
        this.activoVerde = false
      }else if(this.activoAmarillo){
        this.activoRojo = false
        this.activoAmarillo = false
        this.activoVerde = true
      }else if(this.activoVerde){
        this.activoRojo = true
        this.activoAmarillo = false
        this.activoVerde = false
      }
      
    },1000)
  }

}
