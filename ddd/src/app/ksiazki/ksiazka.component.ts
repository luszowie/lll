import { Component, OnInit } from '@angular/core';
import {Ksiazka} from "./ksiazka";

@Component({
  selector: 'app-ksiazka',
  templateUrl: './ksiazka.component.html',
  styleUrls: ['./ksiazka.component.css']
})
export class KsiazkaComponent implements OnInit {
tytul: string;
autor: string;
rokWydania: number;
liczbaStron: number;

ksiazkaArray: Ksiazka[] = [
  new Ksiazka('aaa', 'bbb', 2000, 100,3 ),
  new Ksiazka('ccc', 'ddd', 2001, 101, 4),
  new Ksiazka('eee', 'fff', 2002, 102,5 ),


];



  const2ructor() { }

  ngOnInit() {
  }

}
