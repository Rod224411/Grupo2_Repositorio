import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donador',
  templateUrl: './donador.component.html',
  styleUrls: ['./donador.component.css']
})
export class DonadorComponent implements OnInit {
  constructor(public route:ActivatedRoute){

  }
    ngOnInit(): void {

    }
  }
