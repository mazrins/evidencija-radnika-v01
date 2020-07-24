import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLogedIn: boolean = true;
  ngOnInit(): void {}
  constructor() {}

  title = 'evidencija-radnika';
}
