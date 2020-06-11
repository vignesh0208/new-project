import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'

@Component({
    selector: 'app-type-selection',
    templateUrl: './type-selection.page.html',
    styleUrls: ['./type-selection.page.scss'],
})
export class TypeSelectionPage implements OnInit {
    gender: any= ""
    hairColor: any= ""
    public isenabled:boolean=false;
    constructor(public serviceService: ServiceService) {
    }

    ngOnInit() {
    }

    onModelChange() {
        this.isenabled= true
    }

    pushValue() {
        this.serviceService.Store.gender= this.gender
        this.serviceService.Store.hairColor= this.hairColor
    }
}
