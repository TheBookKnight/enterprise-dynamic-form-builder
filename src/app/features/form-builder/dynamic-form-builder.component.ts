import { Component } from '@angular/core';
import { ClassificationBadgeComponent } from './components/classification-badge/classification-badge.component';

@Component({
    selector: 'gov-dynamic-form-builder',
    standalone: true,
    imports: [ClassificationBadgeComponent],
    templateUrl: './dynamic-form-builder.component.html',
    styleUrl: './dynamic-form-builder.component.scss'
})
export class DynamicFormBuilderComponent {
    formTitle = 'DoD Security Clearance Form';
    classificationLevel = 'SECRET'

    handleBadgeClick(level: string): void {
        alert(`Accessing high-security partition for: ${level}`)
    }
}