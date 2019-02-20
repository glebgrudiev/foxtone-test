import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {OfferingsService} from './offerings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private offeringsService: OfferingsService) {}

  // TODO: Need to create interface for this data
  offerings: any;
  sideNavIsOpen = false;

  ngOnInit(): void {
    this.offeringsService.getOfferings().subscribe(res => {
      this.offerings = res;
    });
  }
}
