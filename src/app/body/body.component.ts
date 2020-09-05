import { Component, OnInit, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Web',
            cols: 1,
            rows: 1,
            src: '/assets/img/icons-web.png',
          },
          {
            title: 'Sistemas',
            cols: 1,
            rows: 1,
            src: '/assets/img/icons-sistemas.png',
          },
          {
            title: 'Cloud',
            cols: 1,
            rows: 1,
            src: '/assets/img/icons-cloud.png',
          },
          {
            title: 'Consultoria',
            cols: 1,
            rows: 1,
            src: '/assets/img/icons-consultoria.png',
          },
          {
            title: 'Contacto',
            cols: 1,
            rows: 1,
            src: '/assets/img/icons-contact.png',
          },
          {
            title: 'Clientes',
            cols: 1,
            rows: 1,
            src: '/assets/img/icons-clientes.png',
          },
        ];
      }

      return [
        {
          title: 'Web',
          cols: 2,
          rows: 1,
          src: '/assets/img/icons-web.png',
        },
        {
          title: 'Sistemas',
          cols: 2,
          rows: 1,
          src: '/assets/img/icons-sistemas.png',
        },
        {
          title: 'Cloud',
          cols: 2,
          rows: 1,
          src: '/assets/img/icons-cloud.png',
        },
        {
          title: 'Consultoria',
          cols: 2,
          rows: 1,
          src: '/assets/img/icons-consultoria.png',
        },
        {
          title: 'Contacto',
          cols: 2,
          rows: 1,
          src: '/assets/img/icons-contact.png',
        },
        {
          title: 'Clientes',
          cols: 2,
          rows: 1,
          src: '/assets/img/icons-clientes.png',
        },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
