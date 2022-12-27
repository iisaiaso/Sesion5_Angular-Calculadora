import { Component } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent {
  num1:number=2;
  num2:number=3;
  resultado:Number=this.num1+this.num2;
}
