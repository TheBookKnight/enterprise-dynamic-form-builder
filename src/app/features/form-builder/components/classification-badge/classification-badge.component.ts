import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gov-classification-badge',
    standalone: true,
    imports: [],
    templateUrl: './classification-badge.component.html',
    styleUrl: './classification-badge.component.scss'
})
export class ClassificationBadgeComponent {
    // 1. Data coming from the parent component
    @Input() level: string = 'UNCLASSIFIED';

    // 2. Custom event to notify the parent when clicked
    @Output() badgeClick = new EventEmitter<string>();

    onBadgeClick(): void {
        // Emit the classification level back up to the parent
        this.badgeClick.emit(this.level);
    }
}