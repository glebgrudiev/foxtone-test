import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-offering-card',
  templateUrl: './offering-card.component.html',
  styleUrls: ['./offering-card.component.scss']
})
export class OfferingCardComponent {

  @Input() offering;

  getPercentage(data) {
    const process = data.investment_goal - data.available_to_invest;
    const percentage = ((process / data.investment_goal) * 100).toFixed();
    return percentage + '%';
  }

}
