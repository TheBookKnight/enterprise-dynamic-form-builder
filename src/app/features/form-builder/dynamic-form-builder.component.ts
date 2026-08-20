import { Component } from '@angular/core';

@Component({
    selector: 'gov-dynamic-form-builder',
    standalone: true,
    imports: [],
    templateUrl: './dynamic-form-builder.component.html',
    styleUrl: './dynamic-form-builder.component.scss'
})
export class DynamicFormBuilderComponent {
    formTitle = 'DoD Security Clearance Form';
    classificationLevel = 'SECRET'
}