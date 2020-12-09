import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 variable= 0;
 variable2= 0;
 resultado= 0;
 operacion = ""
  constructor() {}
sumar(){
  this.resultado= this.variable + this.variable2;
  this.operacion = "sumar"
}

restar(){
  this.resultado= this.variable - this.variable2;
  this.operacion = "restar"
}
multiplicar(){
  this.resultado= this.variable * this.variable2;
  this.operacion = "multiplicar"
}
dividir(){
  this.resultado= this.variable / this.variable2;
  this.operacion = "dividir"
}
}