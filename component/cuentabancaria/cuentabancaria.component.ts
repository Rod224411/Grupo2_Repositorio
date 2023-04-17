import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuentabancaria',
  templateUrl: './cuentabancaria.component.html',
  styleUrls: ['./cuentabancaria.component.css']
})
export class cuentabancariaComponent implements OnInit{

constructor(public route:ActivatedRoute){

}
  ngOnInit(): void {

  }
}
