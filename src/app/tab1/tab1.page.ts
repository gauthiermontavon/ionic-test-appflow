import { Component } from '@angular/core';
import { Camera } from 'ionic-native';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

private imageSrc:string;
  constructor() {}
  
  private openGallery():void{
  	let cameraOptions = {
  		sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
  		destinationType: Camera.DestinationType.FILE_URI,
  		quality: 100,
  		targetWidth: 1000,
  		targetHeight: 1000,
  		encodingType: Camera.EncodingType.JPEG,
  		correctionOrientation: true
  	}
  	
  	Camera.getPicture(cameraOptions).then(
	  	file_uri => this.imageSrc = file_uri,
  		err => console.log(err));
  	
  }

}
