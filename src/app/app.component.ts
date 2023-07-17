import { Component } from '@angular/core';

@Component({
  selector: 'jed-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  luke = {name: "Luke", isJedi: true, temple: "Coruscant"}
  leia = {name: "Leia", isJedi: false}
  hanSolo = {name: "Han Solo", isJedi: false,}
}
