import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent implements OnInit {

imageURL;

  constructor(private camera: Camera) { }

  ngOnInit() {
}

getCamera(){
  this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.FILE_URI
  }).then((res)=>{
    this.imageURL = res;
  }).catch(e => {
    console.log(e);
  });
}

getGallery(){
  this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL
  }).then((res)=>{
    this.imageURL ='data:image/jpeg;base64,' + res;
  }).catch(e => {
    console.log(e);
  });
}

}
