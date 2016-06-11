
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1> <h2>{{action}}</h2>'
})
export class AppComponent {
    title = "FishFash";
    action = "Login";
 }
