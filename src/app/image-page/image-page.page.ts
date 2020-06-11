import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ServiceService } from '../services/service.service';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-image-page',
    templateUrl: './image-page.page.html',
    styleUrls: ['./image-page.page.scss'],
})
export class ImagePagePage implements OnInit {
    public count: any = 0;
    public imageData1: any = [
        '../../assets/icon/add.svg',
        '../../assets/icon/add.svg',
        '../../assets/icon/add.svg',
        '../../assets/icon/add.svg',
        '../../assets/icon/add.svg',
        '../../assets/icon/add.svg'
    ];
    public imageData: any = [];
    public arrayCount: boolean=true;
    public isenabled:boolean=false;

    constructor(public actionSheetController: ActionSheetController, private camera: Camera, private imagePicker: ImagePicker, private serviceService: ServiceService, public navCtrl: NavController) { }

    ngOnInit() {

    }

    async showItem() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Select One Option',
            buttons: [
            {
                text: 'Take Picture',
                icon: 'camera',
                handler: () => {
                    console.log('Open camera');
                    this.openCamera();
                }
            }, 
            {
                text: 'Select Image From Your Gallery',
                icon: 'images',
                handler: () => {
                    console.log('Select Image From Your Gallery');
                    this.pickImage()
                }
            },
            {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }

    openCamera() {
        const options: CameraOptions = {
            quality: 100,
            // cameraDirection: 0,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true,
        }
        
        this.camera.getPicture(options).then((imageData) => {
            this.imageData.push(imageData);
            this.isenabled= true
            this.arrayCount= false
        }, (err) => {
            console.log(err)
            this.isenabled= false
        });
    }

    pickImage() {
        this.imagePicker.getPictures({
            quality: 100,
            outputType: 1
        }).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.imageData.push(results[i])
                this.isenabled= true
                this.arrayCount= false
            }
        }, (err) => {
            console.log(err);
            this.isenabled= false
        });
    }

    pushValue() {
        this.serviceService.Store.image= this.imageData;
    }

    delectImage(i) {
        this.imageData.splice(i, 1)
        if(this.imageData.length == 0) {
            this.isenabled= false
            this.arrayCount= true
        }
        else {
            this.isenabled= true
            this.arrayCount= false
        }
    }
}
