import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;
  constructor(
    private router: Router,
    private dataService: TripDataService,
    private authService: AuthenticationService
  ) {  }

  ngOnInit() { }

  private editTrip(trip: Trip): void {
    console.log('Inside TripListingComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }
  private deleteTrip(trip: Trip): void {
    console.log('Inside TripListingComponent#deleteTrip');
    localStorage.removeItem("tripCode");
    this.dataService.deleteTrip(trip.code);
    // allow page reloading by not reusing routes
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    // reload page
    this.router.navigate([this.router.url]);
  }

  private isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}