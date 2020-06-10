import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  
   
  numberPhoto: number;
  constructor(private http: HttpClient) { 
    this.numberPhoto = 0;
  }

  getPhotos(){
    var photos = [];
    for(let i = this.numberPhoto;i<this.numberPhoto+15;i++){
      this.http.get<any>("https://jsonplaceholder.typicode.com/photos/i").subscribe(data =>{
        photos[photos.length] = data;
      })
      i++;
    }
    if(5000-this.numberPhoto<15){
      this.numberPhoto = 0;
    }
    return photos;
   
  }
}
