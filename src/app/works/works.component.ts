import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  config:any;
  list = [
    {
      date:"10-12-2020",
      title:"AWP busqueda de heroes",
      descripcion: "Esta es una aplicación web progresiva la cual se puede instalar usando google chrome, al igual cuenta con un buscador para buscar los heroes dispobles",
      url:'https://wpa1234.000webhostapp.com'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
