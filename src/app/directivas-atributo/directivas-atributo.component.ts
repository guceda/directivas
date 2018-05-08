import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-atributo',
  templateUrl: './directivas-atributo.component.html',
  styleUrls: ['./directivas-atributo.component.css']
})
export class DirectivasAtributoComponent implements OnInit {
  color: string
  paramStyles:any
  mouseChange:boolean;

  constructor() {
    this.color = "lightCoral"
    this.paramStyles = {
      'text-align':'center', 
      'font-size':'30px', 
      'background-color':'lightCoral', 
      'padding':'40px'
    }
    this.mouseChange = true
   }

  ngOnInit() {
  }

  handleClick(pColor){
    this.paramStyles.backgroundColor = pColor
  }
  onMouse(pChange){
    this.mouseChange = pChange
  }
}
