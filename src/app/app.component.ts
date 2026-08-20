import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DynamicFormBuilderComponent } from './features/form-builder/dynamic-form-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'enterprise-dynamic-form-builder';
}
