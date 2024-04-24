import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModalComponent, AComponent, BComponent],
  template: `
    <app-a></app-a>
    <hr/>
    <app-b></app-b>
    <app-modal></app-modal>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
