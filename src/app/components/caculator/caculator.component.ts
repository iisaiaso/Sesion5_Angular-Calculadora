import { Component, EventEmitter, NgModule, Output } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent {
  resultado!: number
  @Output() resultadoEnviar = new EventEmitter<number>
  operar!: String
  operacion(num1: string, num2: string, Value: String) {
    this.operar = Value
    console.log(this.operar)
    if (this.operar == "+") {
      if (num1 != "" && num2 != "") {
        this.resultado = Number(num1) + Number(num2)
        this.resultadoEnviar.emit(this.resultado)
      }else{
        alert("Los campos no deben estar vacios")
      }
    } else if (this.operar == "-") {
      if (num1 != "" && num2 != "") {
        this.resultado = Number(num1) - Number(num2)
        this.resultadoEnviar.emit(this.resultado)
      } else {
        alert("Los campos no deben estar vacios")
      }
    } else if (Value == '*') {
      if (num1 != "" && num2 != "") {
        this.resultado = Number(num1) * Number(num2)
        this.resultadoEnviar.emit(this.resultado)
      } else {
        alert("Los campos no deben estar vacios")
      }
    } else if (Value = '/') {
      if (num1 != "" && num2 != "") {
        this.resultado = Number(num1) / Number(num2)
        this.resultadoEnviar.emit(this.resultado)
      } else {
        alert("Los campos no deben estar vacios")
      }
    }

  }
}
