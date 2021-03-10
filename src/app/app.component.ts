import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Artigos', url: '/articles', icon: 'newspaper-outline' },
    { title: 'Notícias', url: '/new', icon: 'chatbubbles-outline' },
    { title: 'Faça Contato', url: '/contatcs', icon: 'heart' },
    { title: 'Sobre', url: '/about', icon: 'archive' },
  ];

  constructor() {}
}
