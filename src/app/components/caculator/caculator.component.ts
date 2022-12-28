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
      this.resultado = Number(num1) + Number(num2)
      this.resultadoEnviar.emit(this.resultado)
    } else if (this.operar == "-") {
      this.resultado = Number(num1) - Number(num2)
      this.resultadoEnviar.emit(this.resultado)
    } else if (Value == '*') {
      this.resultado = Number(num1) * Number(num2)
      this.resultadoEnviar.emit(this.resultado)
    } else if (Value = '/') {
      this.resultado = Number(num1) / Number(num2)
      this.resultadoEnviar.emit(this.resultado)
    }
  }
}
