import { Component } from '@angular/core';
import {CursosComponent} from "./cursos.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // template: '<cursos></cursos>'
})
export class AppComponent {
  curso:String = "Node.js e Angular";
}
