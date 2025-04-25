import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts';
  public count = signal(0);

  public increaseCount = () => {
    this.count.update(value => value + 1);
  }
  public decreaseCount = () => {
    this.count.update(value => value - 1);
  }
}
