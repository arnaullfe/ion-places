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
    return this.http.get<any>("https://jsonplaceholder.typicode.com/photos?_limit=15")
  }
}
