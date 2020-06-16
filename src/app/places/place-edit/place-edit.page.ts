import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.page.html',
  styleUrls: ['./place-edit.page.scss'],
})
export class PlaceEditPage implements OnInit {

  place: Place;
  constructor(private activatedRoute : ActivatedRoute, private placesService: PlacesService, private router:Router) {
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const recipeID = paramMap.get('placeID');
      this.place = this.placesService.getPlace(recipeID);
    })
  }
  saveEditPlace(title, url){
    this.place.title=title.value;
    this.place.imageURL=url.value;
    this.placesService.editPlace(this.place);
    this.router.navigate([("/places")])
  }

}
