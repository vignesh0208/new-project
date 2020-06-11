import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'

@Component({
    selector: 'app-title-desc',
    templateUrl: './title-desc.page.html',
    styleUrls: ['./title-desc.page.scss'],
})
export class TitleDescPage implements OnInit {
    title: any = ''
    price: any = ''
    description: any= ''
    public isenabled:boolean=false;
    constructor(public serviceService: ServiceService) { }

    ngOnInit() {
    }

    descriptionInput() {
        this.isenabled= true
    }
    pushValue() {
        this.serviceService.Store.title= this.title;
        this.serviceService.Store.price= this.price;
        this.serviceService.Store.description= this.description;
    }
}
