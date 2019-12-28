import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  submit(f){
    console.log(f)
  }



}
