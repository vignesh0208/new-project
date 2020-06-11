import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Location } from '@angular/common';


@Component({
    selector: 'app-post-content',
    templateUrl: './post-content.page.html',
    styleUrls: ['./post-content.page.scss'],
})
export class PostContentPage implements OnInit {
    myId: any
    dataValue: any
    userInfo: any
    slideOpts = {
        loop: true,
        lazy: true,
    };
    constructor(private activatedRoute: ActivatedRoute, public serviceService: ServiceService,private location: Location) { }

    ngOnInit() {
        console.log(this.serviceService)
    }

    goBack() {
        this.location.back();
    }

    postValue() {
        this.serviceService.pushValue()
    }
}
