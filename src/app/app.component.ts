import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  nick: string;
}

@Component({
  selector: 'my-app',
  templateUrl: '/app/templateHTML.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    nick: 'ron'
  };
}
