import { Component, OnInit } from '@angular/core';
import {Film} from "./film";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
tytul: string;
rezyser: string;
rokProdukcji: string;
ocenaFilmu: number;

filmArray: Film[] = [
  new Film ('zzz','www',1999, 5),
  new Film ('xxx','yyy',1998, 4),
  new Film ('kkk','lll',1997, 3),


  ];


  constructor() { }

  ngOnInit() {
  }

}
