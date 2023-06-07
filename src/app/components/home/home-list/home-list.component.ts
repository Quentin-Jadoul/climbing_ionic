import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {

  activities: any = [];

  constructor(
    private HomeService: HomeService,
  ) {}

  ngOnInit(): void {
    // We get all the activities
    this.HomeService.getActivities().subscribe((data: any) => {
      this.activities = data;
    });
  }



}
