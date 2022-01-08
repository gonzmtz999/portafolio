import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle!: ElementRef;
  links: Array<linkModel> = [
    {
      link: 'https://www.facebook.com/gonzalo.martinezsanchez.7186/',
      icon: '<i class="uil uil-facebook"></i>'
    },
    {
      link: 'https://wa.me/522382049128',
      icon: '<i class="uil uil-whatsapp"></i>'
    },
    {
      link: 'mailto:gonzaloaurelio2@gmail.com',
      icon: '<i class="uil uil-envelope-add"></i>'
    }
  ];

  constructor() {
    // this.initEffect()
  }

  ngOnInit(): void {
    // console.log(this.links);
    
  }

  ngAfterViewInit(): void {
    this.initEffect()
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });

    writer
      .changeCursorColor('white')
      .type('Gonzalo Martínez')
      .rest(99999)
      .start()

  }


}

class linkModel {
  link: string;
  icon: string;
}
