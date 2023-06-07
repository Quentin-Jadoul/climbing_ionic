import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  searchText: string = '';
  places: any = [];

  get filteredPlaces() {
    return this.places.filter((place: { name: string; }) =>
      place.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onSearchChange(event: any) {
    this.searchText = event.detail.value;
  }

  name: string = '';


  constructor(
    private PlacesService: PlacesService,

  ) { }

  ngOnInit(): void {
    // We get all the places
    this.PlacesService.getPlaces(this.name).subscribe((data: any) => {
      this.places = data;
    });
  }

  navigateToPlace(place_id: number) {
    window.location.href = '/place/' + place_id;
  }

  filterPlaces(event: any) {
    // we get the input value from search bar event
    this.name = event.target.value;

    console.log(this.name);

    this.PlacesService.getPlaces(this.name).subscribe((data: any) => {
      this.places = data;
    });
  }
}
