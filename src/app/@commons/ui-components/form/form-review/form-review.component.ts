import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sgbd-form-review',
    templateUrl: './form-review.component.html',
    styleUrls: ['./form-review.component.scss']
})
export class FormReviewComponent implements OnInit {

    @Input() targetObjet: any;
    @Input() skipUnset = true;

    collapsed: any;

    constructor() {
    }

    ngOnInit(): void {
    }

    onCollapseClicked(target: any): void {
        if (!this.collapsed) {
            this.collapsed = {};
        }
        if (this.collapsed.hasOwnProperty(target)) {
            this.collapsed[target] = !this.collapsed[target];
        } else {
            this.collapsed[target] = true;
        }
    }

    isShown(component: any): boolean {
        if (this.collapsed && this.collapsed.hasOwnProperty(component)) {
            return this.collapsed[component];
        }
        return false;
    }
}
