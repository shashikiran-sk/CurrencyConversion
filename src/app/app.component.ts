import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
    selector: 'skapp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
