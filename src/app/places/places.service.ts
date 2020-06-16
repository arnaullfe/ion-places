import { Injectable } from '@angular/core';
import {Place} from './place.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL : 'https://upload.wikimedia.org/wikipedia/commons/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
      comments : ['Lol', 'Flipa', 'esta guapissim cullons']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL : 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg',
      comments : ['Lol', 'Flipa', 'esta guapissim cullons']
    },
    {
      id: '3',
      title: 'Awesome place',
      imageURL : 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg',
      comments : []
    },
    
  ]

  constructor() { 
  }

 
  getPlaces(){
    return [...this.places]
  }

  getPlace(placeID: string){
    return{
      ...this.places.find(place => {
        return place.id == placeID
      })
    }
  }

  addPlace(title: string, imageURL: string){
    this.places.push({
      title, 
      imageURL, 
      comments: [],
      id: this.places.length + 1 +""
    });
  }

  deletePlace(placeID: string){
    this.places = this.places.filter(place => {
      return place.id!=placeID
    })
  }

  editPlace(placeEdit:Place){
    for(let place of this.places){
      if(place.id==placeEdit.id){
        place.title = placeEdit.title;
        place.imageURL = placeEdit.imageURL;
        break;
      }
    }
  }

}
