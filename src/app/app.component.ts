import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { HelloComponent } from './hello/hello.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, HelloComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-version-19-learning';
  clicks = 0;

  eventReceived(){
    this.clicks++;
  }
}
