import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    public Full: any
    public Store: any
    constructor() {
        this.Full= []
        this.Store= {
            id:'',
            title: '',
            price: '',
            description: '',
            image: '',
            gender: '',
            hairColor: ''
        }
    }

    pushValue() {
        this.Store.id = this.Full.length+1
        this.Full.push(this.Store)
        this.Store= {
            id:'',
            title: '',
            price: '',
            description: '',
            image: '',
            gender: '',
            hairColor: ''
        }
    }
}
