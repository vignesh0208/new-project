import { Component } from '@angular/core';

import { ServiceService } from '../services/service.service'

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(public serviceService: ServiceService) { }

    ngOnInit() {
    }
    
}
